import { createSlice } from '@reduxjs/toolkit';

const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        currentDate: new Date().getTime(),
        events: [], // Replace this with your actual events data structure
        selectedMonth: new Date(),
        selectedDate: new Date(),
    },
    reducers: {
        setCurrentDate: (state, action) => {
            state.currentDate = action.payload;
        },
        addEvent: (state, action) => {
            state.events.push(action.payload);
        },
        removeEvent: (state, action) => {
            state.events = state.events.filter(event => event.id !== action.payload);
        },
        setSelectedMonth: (state, action) => {
            state.selectedMonth = action.payload;
        },
        setSelectedDate: (state, action) => {
            state.selectedDate = action.payload
        }
    },
});

export const { setCurrentDate, addEvent, removeEvent, setSelectedMonth, setSelectedDate } = calendarSlice.actions;

export default calendarSlice.reducer;