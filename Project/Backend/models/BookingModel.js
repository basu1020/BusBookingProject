const mongoose = require('mongoose');

// Schema for validation of data before inserting the data into MongoDB Database
const BookingsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    gender:{
        type: String,
        required: true,
    },
    age:{
        type: Number,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    mobileNo:{
        type: String,
        required: true,
    },
    from:{
        type: String,
        required: true,
    },
    to:{
        type: String,
        required: true,
    },
    seats:{
        type: String,
        required: true,
    },
    seatNumber:{
        type:Number,
        required:true,
    },
    busName:{
        type:String,
        require:true
    },
    busFare:{
        type: Number,
        required: true,
    },
})

module.exports = mongoose.model('Bookings',BookingsSchema);