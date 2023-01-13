import { useState } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Balance from './components/dashboard/Balance';
import Dashboard from './components/dashboard/Dashboard';
import Profile from './components/dashboard/Profile';
import SpecificProfile from './components/dashboard/SpecificProfile';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import AuthProvider from './contexts/AuthProvider';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import './styles/App.css';

function Root({ auth }) {
    return (
        <>
            <Navbar auth={auth} />
            <Outlet />
            <Footer />
        </>
    );
}

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogin = () => {
        setIsLoggedIn(true);
    };
    const handleLogOut = () => {
        setIsLoggedIn(false);
    };
    const auth = { isLoggedIn, setIsLoggedIn, handleLogin, handleLogOut };

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root auth={auth} />,
            errorElement: <NotFound auth={auth} />,
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
                        <PrivateRoute auth={auth}>
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

    return (
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    );
}

export default App;
