import { createSlice } from '@reduxjs/toolkit';

const eventSlice = createSlice({
    name: 'event',
    initialState: {
        selectedEvent: null,
        isModalVisible: false,
    },
    reducers: {
        selectEvent: (state, action) => {
            state.selectedEvent = action.payload;
        },
        toggleModal: (state) => {
            state.isModalVisible = !state.isModalVisible;
        },
    },
});

export const { selectEvent, toggleModal } = eventSlice.actions;
export default eventSlice.reducer;
