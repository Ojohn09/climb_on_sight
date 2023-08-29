
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    modals: [],
};

const multiModalSlice = createSlice({
    name: 'multiModal',
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

export const { openMultiModal, closeMultiModal } = multiModalSlice.actions;
export default multiModalSlice.reducer
