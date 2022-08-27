import React from 'react';
import { Routes, Route } from 'react-router-dom'

import DashBoard from './dashboard';
import PendingRequest from './pendiing-request';
import PendingDetail from './pendiing-request/detail';
import { routerLink } from '../routerLink';


const RoutesComponent = () => {

    return (
        <Routes>
            <Route path='/' element={<DashBoard />} />
            <Route path={routerLink('pending')} element={<PendingRequest />} />
            <Route path={`${routerLink('pending-detail')}/:merchantId`} element={<PendingDetail />} />
        </Routes>
    )
}

export default RoutesComponent