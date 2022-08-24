import classNames from 'classnames';
import React, { useState } from 'react';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa'

const Side = () => {
    const [isCollapse, setIsCollapse] = useState(false)
    return (
        <div className='w-screen h-screen fixed z-20 top-0 left-0 transition-all'>
            <div className='relative w-full h-full'>
                {/* Overlay */}
                <div 
                    className={classNames('w-screen h-screen absolute top-0 left-0 bg-black/20 transition-all', {'bg-transparent': !isCollapse})}
                    onClick={() => setIsCollapse(false)}
                ></div>

                {/* Side */}
                <div className={classNames('w-60 h-full absolute top-0 left-0 bg-white transition-all', {'-left-60': !isCollapse})}>
                    {
                        isCollapse && <FaChevronCircleLeft
                            className='text-green-500 bg-white rounded-full overflow-hidden cursor-pointer text-xl absolute top-7 right-0 translate-x-1/2 -translate-y-1/2'
                            onClick={() => setIsCollapse(!isCollapse)}
                        />
                    }
                    {
                        !isCollapse && <FaChevronCircleRight
                            className='text-green-500 bg-white rounded-full overflow-hidden cursor-pointer text-xl absolute top-7 right-0 translate-x-1/2 -translate-y-1/2'
                            onClick={() => setIsCollapse(!isCollapse)}
                        />
                    }
                    <p className='w-full h-14 pl-5 text-lg font-bold flex items-center'>Logo</p>
                <ul>
                    <li className='text-sm font-semibold px-5 py-3 mb-1 bg-gray-100 cursor-pointer'>
                        Dashboard
                    </li>
                    <li className='text-sm font-semibold px-5 py-3 mb-1 bg-gray-100 cursor-pointer'>
                        Pending Request
                    </li>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default Side