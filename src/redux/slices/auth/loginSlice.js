// src/features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { mockUsers } from '../../../utils/mockData';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        user: null,
    },
    reducers: {
        login: (state, action) => {
            const { email, password } = action.payload;
            const user = mockUsers.find(
                (user) => user.email === email && user.password === password
            );

            if (user) {
                state.isAuthenticated = true;
                state.user = user;
            }
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
