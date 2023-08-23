
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import Login_views from '../auth/Login_views';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated ? <Component {...props} /> : <Navigate to='/login' />
            }
        />
    );
};

export default ProtectedRoute;
