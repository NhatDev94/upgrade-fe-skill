import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import DashBoard from './dashboard';
import PendingRequest from './pendiing-request';


const RoutesComponent = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<DashBoard />} />
                <Route path='/pending-request' element={<PendingRequest />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesComponent