

import { createSlice } from '@reduxjs/toolkit';

const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        eventDates: [], // Initial event dates here
        currentMonth: new Date(),
    },
    reducers: {
        setEventDates: (state, action) => {
            state.eventDates = action.payload;
        },
        setCurrentMonth: (state, action) => {
            state.currentMonth = action.payload;
        },
    },
});

export const { setEventDates, setCurrentMonth } = calendarSlice.actions;

export default calendarSlice.reducer;
