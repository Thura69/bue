import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    login:false
}

export const LoginSlice = createSlice({
    name: 'Login',
    initialState: initialState,
    reducers: {
        LoginUser: (state, action) => {
            state.name = action.payload;
            state.login = true
        },
        LogoutUser: (state, action) => {
            state.name = "";
            state.login = false;
        }
    }
});

export const { LoginUser, LogoutUser } = LoginSlice.actions;
export default LoginSlice.reducer;