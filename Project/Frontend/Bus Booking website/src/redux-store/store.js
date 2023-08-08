import {configureStore} from '@reduxjs/toolkit'
import userReducer from "../global-state/userSlice"
import busListReducer from "../global-state/busListSlice"
import currentSelectedTripReducer from "../global-state/currentSelectedTrip"
import queriedBusListReducer from "../global-state/queriedbusListSlice"
import busQueriesReducer from "../global-state/busQueriesSlice"

export const store = configureStore({
    reducer: {
        user: userReducer,
        busList: busListReducer,
        currentSelectedTrip: currentSelectedTripReducer, 
        queriedBusList: queriedBusListReducer,
        busQueries: busQueriesReducer
    }
})