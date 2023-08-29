import { createSlice } from '@reduxjs/toolkit';

const addEventCalendarSlice = createSlice({
    name: 'addEventCalendar',
    initialState: {
        selectedMonth: new Date().getTime(),
    },
    reducers: {
        setSelectedMonth: (state, action) => {
            state.selectedMonth = action.payload;
        },
    },
});

export const { setSelectedMonth } = addEventCalendarSlice.actions;

export default addEventCalendarSlice.reducer;