import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './components/AllRoutes';
import Navbar from './components/Navbar';
import AuthProvider from './contexts/AuthProvider';
import './styles/App.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogin = () => {
        setIsLoggedIn(true);
    };
    const handleLogOut = () => {
        setIsLoggedIn(false);
    };
    const auth = { isLoggedIn, setIsLoggedIn, handleLogin, handleLogOut };
    return (
        <AuthProvider>
            <BrowserRouter>
                <Navbar auth={auth} />
                <AllRoutes auth={auth} />
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
