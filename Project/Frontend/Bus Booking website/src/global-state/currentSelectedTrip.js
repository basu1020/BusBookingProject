import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    to: null,
    from: null,
    interval: null,
    date: null,
    timeInterval: null,
    busOwnerId: null,
    startTime: null,
    endTime: null,
    busNo: null,
    busName: null,
    amenities_list: [],
    busFare: null,
    busName: null,
}

export const currentSelectedTripSlice = createSlice({
    name: 'currentSelectedTrip',
    initialState,
    reducers: {
        currentSelectedTripChanged: (state, action) => {
            state = action.payload
        },
        currentSelectedTripDefaulted: (state) => {
            state = initialState
        }
    }
})

export const selectCurrentSelectedTrip = (state) => state.currentSelectedTrip
export default currentSelectedTripSlice.reducer

