import { configureStore } from '@reduxjs/toolkit'
import signUpFormReducer from '../slices/auth/signUpFormSlice'
import authReducer from '../slices/auth/loginSlice'
import modalReducer from '../slices/features/modalSlice'
import calendarReducer from '../slices/features/calendarSlice'

const store = configureStore({
    reducer: {
        signUp: signUpFormReducer,
        auth: authReducer,
        modal: modalReducer,
        calendar: calendarReducer,
    }
})


export default store