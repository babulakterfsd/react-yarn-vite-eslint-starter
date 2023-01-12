import { useState } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import Profile from './components/Profile';
import SpecificProfile from './components/SpecificProfile';
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
            element: <Root auth={auth} />,
            errorElement: <NotFound />,
            children: [
                {
                    path: '/',
                    element: <Home />,
                },
                {
                    path: 'contact',
                    element: <Contact />,
                },
                {
                    path: 'about',
                    element: <About />,
                },
                {
                    path: 'profile',
                    element: <Profile />,
                    children: [
                        {
                            path: 'profile/:id',
                            element: <SpecificProfile />,
                        },
                    ],
                },
                {
                    path: 'dashboard',
                    element: (
                        <PrivateRoute auth={auth}>
                            <Dashboard />
                        </PrivateRoute>
                    ),
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
