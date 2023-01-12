import React from 'react';
import { Link } from 'react-router-dom';

function Profile() {
    return (
        <div>
            <p>This is the profile component</p>
            <div className="flex justify-between items-center w-52 ml-20 ">
                <Link
                    to="/profile/1"
                    className="bg-indigo-300 text-indigo-600 py-1 px-2 rounded-md text-center"
                >
                    1
                </Link>
                <Link
                    to="/profile/2"
                    className="bg-indigo-300 text-indigo-600 py-1 px-2 rounded-md text-center"
                >
                    2
                </Link>
                <Link
                    to="/profile/3"
                    className="bg-indigo-300 text-indigo-600 py-1 px-2 rounded-md text-center"
                >
                    3
                </Link>
            </div>
        </div>
    );
}

export default Profile;
