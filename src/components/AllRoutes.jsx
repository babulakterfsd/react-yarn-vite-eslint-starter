import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
            {/* <Route path="/packages/:packageid" element={<PrivateOutlet />}>
                <Route path="" element={<Checkout />} />
            </Route>
            <Route path="/dashboard" element={<PrivateOutlet />}>
                <Route path="" element={<Dashboard />}>
                    <Route path="summary" element={<Summary />} />
                    <Route path="allusers" element={<Users />}>
                        <Route path="singleuserdetails" element={<SingleUserDetails />} />
                    </Route>
                    <Route path="allpackages" element={<AllPackages />} />
                    <Route path="addnewpackage" element={<AddNewpackage />} />
                    <Route path="allorders" element={<AllOrders />} />
                    <Route path="myorders" element={<MyOrders />} />
                    <Route path="addreview" element={<AddReview />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="*" element={<NotFoundInDashboard />} />
                </Route>
            </Route> */}
        </Routes>
    );
}

export default AllRoutes;
