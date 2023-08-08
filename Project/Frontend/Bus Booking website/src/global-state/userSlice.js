import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    loggedIn: false,
    userName: null,
    age: null,
    email: null,
    phoneNo: null,
    firstName: null,
    lastName: null,
    birthdate: null,
    gender: null,
    address: {
        street: null,
        city: null,
        state: null,
        zipCode: null,
        country: null
    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userLoggedIn: (state, action) => {
            state = action.payload
        },
        userLoggedOut: (state) => {
            state = initialState
        }
    }
})

export const selectUser = (state) => state.user
export default userSlice.reducer