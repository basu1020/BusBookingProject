const express = require("express");
const router = express.Router();
const {addTrip,trips,tripsParameter, tripByDate} = require('../controllers/tripsController')

//get all tripDetails
router.route('/trips/new').post(addTrip);
router.route('/trips').get(trips,tripsParameter);
router.route('/tripsByDate').get(tripByDate);
router.route('/parameter').get(tripsParameter);



module.exports=router;