// signUpFormSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    email: '',
    phoneNumber: '',
    userName: '',
    password: '',
    confirmPassword: '',
    guidingInsurance: null,
    guidingCertificate: null,
    links: [],
    rockClimbingExperience: '',
    iceClimbingExperience: '',
    referenceName: '',
    referenceEmail: '',
    referencePhoneNumber: '',
};

const signUpFormSlice = createSlice({
    name: 'signUpForm',
    initialState,
    reducers: {
        updatePersonalInfo: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.phoneNumber = action.payload.phoneNumber;
        },
        updateAccountSettings: (state, action) => {
            state.userName = action.payload.userName;
            state.password = action.payload.password;
            state.confirmPassword = action.payload.confirmPassword;
        },
        updateGuidience: (state, action) => {
            state.guidingInsurance = action.payload.guidingInsurance;
            state.guidingCertificate = action.payload.guidingCertificate;
        },
        updateCustomerReview: (state, action) => {
            state.links = action.payload.links;
        },
        updateExperience: (state, action) => {
            state.rockClimbingExperience = action.payload.rockClimbingExperience;
            state.iceClimbingExperience = action.payload.iceClimbingExperience;
        },
        updateGuideReference: (state, action) => {
            state.referenceName = action.payload.referenceName;
            state.referenceEmail = action.payload.referenceEmail;
            state.referencePhoneNumber = action.payload.referencePhoneNumber;
        },

    },
});

// Export the action creators
export const {
    updatePersonalInfo,
    updateAccountSettings,
    updateGuidience,
    updateCustomerReview,
    updateExperience,
    updateGuideReference,
} = signUpFormSlice.actions;

// Export the reducer
export default signUpFormSlice.reducer;

