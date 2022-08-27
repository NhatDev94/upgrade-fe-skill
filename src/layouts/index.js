import React from 'react';
import RoutesComponent from '../routes';
import Header from './header';
import Side from './side';

const Layout = () => {
    return (
        <div className=''>
            {/* Header */}
            <Header />

            {/* Side */}
            <Side />

            {/* Content */}
            <div className='p-5 mt-14'>
                <RoutesComponent />
            </div>

            {/* Footer */}
            <div className=''></div>
        </div>
    )
}

export default Layout