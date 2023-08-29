import { configureStore } from '@reduxjs/toolkit'
import signUpFormReducer from '../slices/auth/signUpFormSlice'
import authReducer from '../slices/auth/loginSlice'
import modalReducer from '../slices/features/modalSlice'
import calendarReducer from '../slices/features/calendarSlice'
import eventReducer from '../slices/features/eventSlice'
import multiModalReducer from '../slices/features/multiModalSlice'
import addEventCalendarReducer from '../slices/features/addEventCalendarSlice'

const store = configureStore({
    reducer: {
        signUp: signUpFormReducer,
        auth: authReducer,
        modal: modalReducer,
        calendar: calendarReducer,
        event: eventReducer,
        multiModal: multiModalReducer,
        addEventCalendar: addEventCalendarReducer,

    }
})


export default store