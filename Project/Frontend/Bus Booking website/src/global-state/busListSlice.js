import {createSlice} from "@reduxjs/toolkit"
import BusData from "../data/busData"

const initialState = {
    list: BusData,
}

export const busListSlice = createSlice({
    name: 'busList',
    initialState,
    reducers: {}
})

export const selectBusList = (state) => state.busList.list
export default busListSlice.reducer

