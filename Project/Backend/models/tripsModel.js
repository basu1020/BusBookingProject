const mongoose = require('mongoose');

const tripsSchema = mongoose.Schema({
  date:{
    type : String,
    required:true,
  },
  time: {
    type: String,
    required: true,
  },
  from :{
    type: String,
    required:true,
  },
  to : {
    type: String,
    required:true,
  },
  busOwnerID : {
      type:Number,
      required:true,
  },
  startTime : {
    type: Number,
    required:true,
  },
  EndTime : {
    type: Number,
    required:true,
  },

  category : {
    type: String,
    required:true,
  },
  SeatBooked :{
   type: [String],
   required:true,
 },
  bus_no : {
    type: String,
    required:true,
  },
  amenities_list : {
    type: [String],
    required: true,
  },
  busFare: {
    type: Number,
    required: true,
  },
  busName:{
       type:String,
       required:true,
  }
},{timesTamps:true});



module.exports = mongoose.model('trips',tripsSchema)