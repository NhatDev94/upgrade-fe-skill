import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import DashBoard from './dashboard';
import PendingRequest from './pendiing-request';

import '../assests/styles/index.css'

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