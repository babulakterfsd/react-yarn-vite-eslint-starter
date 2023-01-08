import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="flex justify-end mb-36">
            <nav className="bg-indigo-300 text-indigo-600 font-semibold py-2 px-4 w-96 rounded-sm flex justify-evenly">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
    );
}

export default Navbar;
