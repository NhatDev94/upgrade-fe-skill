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
            <div className=''>
                <RoutesComponent />
            </div>

            {/* Footer */}
            <div className=''></div>
        </div>
    )
}

export default Layout