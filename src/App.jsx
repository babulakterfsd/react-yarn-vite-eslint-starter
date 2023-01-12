import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Profile from './components/Profile';
import SpecificProfile from './components/SpecificProfile';
import AuthProvider from './contexts/AuthProvider';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import './styles/App.css';

function Root() {
    return <Home />;
}

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root />,
            errorElement: <NotFound />,
        },
        {
            path: 'contact',
            element: <Contact />,
        },
        {
            path: 'profile',
            element: <Profile />,
            children: [
                {
                    path: 'profile/1',
                    element: <SpecificProfile />,
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
