import { configureStore } from '@reduxjs/toolkit'
import signUpFormReducer from '../slices/auth/signUpFormSlice'

const store = configureStore({
    reducer: {
        signUp: signUpFormReducer
    }
})


export default store