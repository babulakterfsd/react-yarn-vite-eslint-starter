import { useState } from 'react';

const AllStates = () => {
    // states
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogin = () => {
        setIsLoggedIn(true);
    };
    const handleLogOut = () => {
        setIsLoggedIn(false);
    };
    const auth = { isLoggedIn, setIsLoggedIn, handleLogin, handleLogOut };

    return {
        auth,
    };
};

export default AllStates;
