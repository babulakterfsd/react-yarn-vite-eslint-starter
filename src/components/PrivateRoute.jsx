import { Navigate } from 'react-router-dom';

function PrivateRoute({ auth, children }) {
    const { isLoggedIn } = auth;
    return isLoggedIn ? children : <Navigate to="/" replace />;
}

export default PrivateRoute;
