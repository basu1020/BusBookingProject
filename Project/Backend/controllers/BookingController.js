const BookingModel = require('../models/BookingModel');


// api for adding trips
exports.addBooking = async (req, res) => {
          try{
             const newBooking = await BookingModel.create(req.body);
          res.status(201).json({success:true,newBooking});
        }catch (error) {
                res.status(500).json({ message: error });
              }
        }
      


// get api for trips
exports.bookings = async (req,res) => {
        try{
        const Bookings = await BookingModel.find({})
        res.status(200).json({success:true,Bookings})
     }catch (error) {
        res.status(500).json({ message: error });
      }
    }
