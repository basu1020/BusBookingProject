const express = require('express');
const app = express();
const bookingController = require('./controllers/BookingController')
const userController = require('./controllers/userController')
const fetchUser = require('./middleware/fetchuser');
const BusData = require('../Data/BusData')
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const router = express.Router()

//*************Bus Info ******************

router.get('/bus-info', (req, res) => {
    res.status(200).json({BusData})
})

//************ User requests *********************

router.post('/user/signup', userController.userValidationRules, userController.addNewUser)

router.post('/user/login', userController.userLoginRules, userController.login)

router.post('/get-user', fetchUser, userController.getUser)

//************ Bookings requests *********************

router.get('/bookings/get', bookingController.bookings)

router.get('/bookings/date/:date', bookingController.bookingsByDate)

router.get('/bookings/search', bookingController.bookingParameter)

router.post('/bookings/new',
    // fetchUser,
    bookingController.bookingValidationRules,
    bookingController.addBooking
);

app.use('/api/v1', router);

module.exports = app;
