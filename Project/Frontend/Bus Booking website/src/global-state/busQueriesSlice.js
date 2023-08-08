import {createSlice} from "@reduxjs/toolkit"

const dateInstance = new Date()

const initialState = {
    queries : {
        from: "Select",
        to: "Select",
        date: dateInstance,
        departureSession: null,
        arrivalSession: null,
        busOperator: null,
    }
}

export const busQueriesSlice = createSlice({
    name: 'busQueries',
    initialState,
    reducers: {
        busQueriesChanged: (state, action) => {
            state.queries = action.payload
        },
        busQueriesDefaulted: (state, action) => {
            state.queries = initialState
        }
    }
})

export const selectbusQueries = (state) => state.busQueries.queries
export const {busQueriesChanged, busQueriesDefaulted} = busQueriesSlice.actions
export default busQueriesSlice.reducer