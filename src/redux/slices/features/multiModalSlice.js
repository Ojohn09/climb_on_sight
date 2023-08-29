// src/features/modal/modalSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    modals: [],
};

const multiModalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openMultiModal: (state, action) => {
            state.modals.push(action.payload);
        },
        closeMultiModal: (state, action) => {
            state.modals = state.modals.filter((modal) => modal.id !== action.payload);
        },
    },
});

export const { openModal, closeModal } = multiModalSlice.actions;

export default multiModalSlice.reducer
