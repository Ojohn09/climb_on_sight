import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        isOpen: false,
        isModalOpen: false
    },
    reducers: {
        openModal: (state) => {
            state.isOpen = true
        },
        closeModal: (state) => {
            state.isOpen = false
        },
        openModal2: (state) => {
            state.isModalOpen = true
        },
        closeModal2: (state) => {
            state.isModalOpen = false
        },
    }
})

export const { openModal, closeModal, openModal2, closeModal2 } = modalSlice.actions

export default modalSlice.reducer;