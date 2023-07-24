const express = require('express');
const app = express();
const tripsModel = require('./models/tripsModel')
const { body, validationResult } = require('express-validator')
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const router = express.Router()

// ************ GET Requests *********************

// GET request for fetching all the trips
router.get('/trips', async (req, res) => {
    const trips = await tripsModel.find({})
    res.status(200).json({ success: true, trips })
});

// GET request for fetching trips by date
router.get('/trips/date/:date', async (req, res) => {
    const { date } = req.params
    const [day, month, year] = date.split('-')

    const tripsByDate = await tripsModel.find({ date: `${day}/${month}/${year}` })
    res.status(200).json({ success: true, tripsByDate })
})

// GET request for fetching trips by query
router.get('/trips/search', async (req, res) => {
    
    const { category, to, from } = req.query
    const desiredQuery = {}
    if (category) {
        desiredQuery.category = category;
    }

    if (from) {
        desiredQuery.from = from;
    }

    if (to) {
        desiredQuery.to = to;
    }
    const tripsByQuery = await tripsModel.find(desiredQuery)
    res.status(200).json({ success: true, tripsByQuery })
})

// ************ POST Requests *********************

// POST request for adding new trip
router.post('/trips/new', [
    // body('date').isDate(),
    body('from').notEmpty(),
    body('to').notEmpty(),
    body('busOwnerID').isNumeric(),
    body('startTime').isNumeric(),
    body('EndTime').isNumeric(),
    body('category').notEmpty(),
    body('SeatBooked').isArray({ min: 1 }),
    body('bus_no').notEmpty(),
    body('amenities_list').isArray({ min: 1 }),
    body('busFare').isNumeric(),
    body('busName').notEmpty(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },], async (req, res) => {
        const currentDate = new Date()
        const dateStrings = currentDate.toLocaleString().split(',')
        req.body.date = dateStrings[0]
        req.body.time = dateStrings[1]
        const newTrip = await tripsModel.create(req.body);
        res.status(200).json({ success: true, newTrip });
    });

app.use('/api/v1', router);

module.exports = app;
