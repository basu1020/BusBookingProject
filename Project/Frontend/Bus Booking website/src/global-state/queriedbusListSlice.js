import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    list: []
}

export const queriedBusListSlice = createSlice({
    name: 'queriedBusList',
    initialState,
    reducers:{
        queriedBusListChanged : (state, action) => {
            state.list = action.payload
        }
    }
})

export const selectqueriedBusList = (state) => state.queriedBusList.list
export default queriedBusListSlice.reducer