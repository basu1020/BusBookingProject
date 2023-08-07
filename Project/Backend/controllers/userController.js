const userModel = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { body, validationResult } = require('express-validator')

const generateAuthToken = (user) => {
    console.log(process.env.JWT_SECRET)
    console.log(user._id,"hi")
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    return token;
};

exports.addNewUser = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        let user = await userModel.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).json({ error: "Sorry a user with this email already exists" })
        }

        const salt = await bcrypt.genSalt(10)
        const securePass = await bcrypt.hash(req.body.password, salt)
        req.body.password = securePass

        const newUser = await userModel.create(req.body);
        const token = generateAuthToken(newUser)
        res.status(201).json({ success: true, token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        // Check if the user with the given email exists
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Compare the provided password with the hashed password in the database
        const isPasswordValid = await bcrypt.compare(password, user.password);
        
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate and return an authentication token
        const token = generateAuthToken(user);
        res.status(200).json({ success: true, token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getUser = async (req, res) => {
    try {
        // Get the user ID from the request object (assuming you set the user ID in the request during authentication middleware)
        const userId = req.userId;

        // Fetch the user from the database using the user ID
        const user = await userModel.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Return the user details
        res.status(200).json({ success: true, user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.userLoginRules = [
    body('email').isEmail(),
    body('password').exists()
]

// Validation rules for the user schema
exports.userValidationRules = [
    body('username').isLength({ min: 5 }).withMessage('Username must be at least 5 characters long'),
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({ min: 3 }).withMessage('Password must be at least 3 characters long'),
    body('firstName').notEmpty().withMessage('First name is required'),
    body('lastName').notEmpty().withMessage('Last name is required'),
    body('birthdate').isISO8601().withMessage('Invalid birthdate format'), 
    body('gender').isIn(['male', 'female', 'other']).withMessage('Invalid gender'),
    body('address.street').optional().notEmpty().withMessage('Street address is required'),
    body('address.city').optional().notEmpty().withMessage('City is required'),
    body('address.state').optional().notEmpty().withMessage('State is required'),
    body('address.zipCode').optional().notEmpty().withMessage('Zip code is required'),
    body('address.country').optional().notEmpty().withMessage('Country is required'),
    body('phone').optional().isMobilePhone().withMessage('Invalid phone number'),
]
