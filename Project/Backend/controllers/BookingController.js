const BookingModel = require('../models/BookingModel');
const { body, validationResult } = require('express-validator');


// api for adding trips
exports.addBooking = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // const currentDate = new Date()
    // const dateStrings = currentDate.toLocaleString().split(',')
    // req.body.date = dateStrings[0]
    // req.body.time = dateStrings[1]
    const newBooking = await BookingModel.create(req.body);
    res.status(201).json({ success: true, newBooking });
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

// get api for trips
exports.bookings = async (req, res) => {
  try {
    const Bookings = await BookingModel.find({})
    res.status(200).json({ success: true, Bookings })
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

// get api for getting bookings by date
exports.bookingsByDate = async (req, res) => {
  try {
    const { date } = req.params
    const [year, month, day] = date.split('-')
    const bookingsByDate = await BookingModel.find({ date: `${year}-${month}-${day}` })
    res.status(200).json({ success: true, bookingsByDate })
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

// get api for trips on parameter
exports.bookingParameter = async (req, res) => {
  try {
    const filter = {};
    // Iterate over the query parameters and add them to the filter object
    for (const key in req.query) {
      filter[key] = req.query[key];
    }

    const trips = await BookingModel.find(filter);
    res.status(200).json({ success: true, trips });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Validation rules for the booking schema
exports.bookingValidationRules = [
  body('date').isISO8601().withMessage('Invalid date format'), // Assuming you want the date in ISO8601 format (e.g., 'YYYY-MM-DD')
  body('time').notEmpty().withMessage('Time is required'),
  body('from').notEmpty().withMessage('From location is required'),
  body('to').notEmpty().withMessage('To location is required'),
  body('busOwnerID').isInt().withMessage('Invalid bus owner ID'),
  body('startTime').isInt().withMessage('Invalid start time'),
  body('EndTime').isInt().withMessage('Invalid end time'),
  body('category').notEmpty().withMessage('Category is required'),
  body('SeatBooked').isArray().notEmpty().withMessage('Seat bookings are required'),
  body('bus_no').notEmpty().withMessage('Bus number is required'),
  body('amenities_list').isArray().notEmpty().withMessage('Amenities list is required'),
  body('busFare').isFloat().withMessage('Invalid bus fare'),
  body('busName').notEmpty().withMessage('Bus name is required'),
  body('name').notEmpty().withMessage('Name is required'),
  body('gender').notEmpty().withMessage('Gender is required'),
  body('age').isInt().withMessage('Invalid age'),
  body('email').isEmail().withMessage('Invalid email address'),
  body('mobileNo').notEmpty().withMessage('Mobile number is required'),
  body('seatNumber').isInt().withMessage('Invalid seat number'),
];