const express = require("express");
const router = express.Router();
const {addBooking,bookings} = require('../controllers/BookingController')

//get all Bookings
router.route('/bookings/new').post(addBooking);
router.route('/bookings').get(bookings);

module.exports=router;
