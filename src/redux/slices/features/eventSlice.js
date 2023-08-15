import { createSlice } from '@reduxjs/toolkit';

const eventSlice = createSlice({
    name: 'event',
    initialState: {
        selectedEvent: null,
        isModalVisible: false,
        clickedEvent: null,
    },
    reducers: {
        selectEvent: (state, action) => {
            state.selectedEvent = action.payload;
        },
        toggleModal: (state) => {
            state.isModalVisible = !state.isModalVisible;
        },
        setClickedEvent: (state, action) => {
            state.clickedEvent = action.payload;
        },
    },
});

export const { selectEvent, toggleModal, setClickedEvent } = eventSlice.actions;
export default eventSlice.reducer;
