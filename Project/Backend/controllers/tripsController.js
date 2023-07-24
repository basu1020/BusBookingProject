const tripsModel = require('../models/tripsModel');


// api for adding trips
exports.addTrip = async (req, res) => {
  try {
    const newTrip = await tripsModel.create(req.body);
    res.status(201).json({ success: true, newTrip });
  } catch (error) {
    res.status(500).json({ message: error });
  }
}



// get api for trips
exports.trips = async (req, res) => {
  try {
    const trips = await tripsModel.find({}).limit(50)
    res.status(200).json({ success: true, trips })
  } catch (error) {
    res.status(500).json({ message: error });
  }

}


//get api for trips by date
exports.tripByDate = async (req, res) => {
  try {
    const { date } = req.query;
    const tripByDate = await tripsModel.find({ date });
    res.status(200).json(tripByDate);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}


// get api for trips on parameter
exports.tripsParameter = async (req, res) => {
  try {
    const { from, to, busName, rating } = req.query;
    const filter = {};

    if (from) {
      filter.from = from;
    }
    if (to) {
      filter.to = to;
    }
    if (busName) {
      filter.busName = busName;
    }
    if (rating) {
      filter.rating = rating;
    }

    const trip = await tripsModel.find(filter);
    res.status(200).json({ success: true, trip })
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

