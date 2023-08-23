import { login } from '../../redux/slices/auth/loginSlice';

export const loginUser = (credentials) => {
    return login(credentials);
};