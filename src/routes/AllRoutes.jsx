import { createBrowserRouter } from 'react-router-dom';
import Balance from '../components/dashboard/Balance';
import Dashboard from '../components/dashboard/Dashboard';
import Profile from '../components/dashboard/Profile';
import SpecificProfile from '../components/dashboard/SpecificProfile';
import AppLayout from '../Layout/AppLayout';
import About from '../views/About';
import Contact from '../views/Contact';
import ErrorPage from '../views/ErrorPage';
import Home from '../views/Home';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home /> },
            {
                path: 'contact',
                element: <Contact />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'dashboard',
                element: (
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                ),
                children: [
                    {
                        path: 'profile',
                        element: <Profile />,
                        children: [
                            {
                                path: ':id',
                                element: <SpecificProfile />,
                            },
                        ],
                    },
                    {
                        path: 'balance',
                        element: <Balance />,
                    },
                ],
            },
        ],
    },
]);

export default router;
