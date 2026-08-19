import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "user",

    initialState: {
        authUser: null,
    },

    reducers: {
        setAuthUser:(state, action) => {
            state.authUser = action.payload;
        }
    }
});

export const {setAuthUser} = userSlice.actions; // give authenticated user object
export default userSlice.reducer; // It actually updates the user