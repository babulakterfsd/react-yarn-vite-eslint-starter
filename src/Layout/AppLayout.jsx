import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../ui/Footer';
import Navbar from '../ui/Navbar';

function AppLayout({ auth }) {
    return (
        <>
            <Navbar auth={auth} />
            <Outlet />
            <Footer />
        </>
    );
}

export default AppLayout;
