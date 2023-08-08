import { configureStore } from '@reduxjs/toolkit'
import signUpFormReducer from '../slices/auth/signUpFormSlice'
import authReducer from '../slices/auth/loginSlice'
import modalReducer from '../slices/features/modalSlice'

const store = configureStore({
    reducer: {
        signUp: signUpFormReducer,
        auth: authReducer,
        modal: modalReducer,


    }
})


export default store