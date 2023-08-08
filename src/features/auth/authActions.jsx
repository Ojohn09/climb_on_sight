import { login, logout } from '../../redux/slices/auth/loginSlice';

export const loginUser = (credentials) => (dispatch) => {
    // Simulate authentication logic
    dispatch(login(credentials));
};

export const logoutUser = () => (dispatch) => {
    dispatch(logout());
};