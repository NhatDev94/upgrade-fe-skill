import React from 'react';

const PageTitle = ({
    title = 'Trang chu'
}) => {

    return (
        <div className='w-full p-5 bg-white rounded-md shadow-md border border-gray-200 flex items-center justify-between'>
            <h4 className='text-lg font-bold text-gray-700 capitalize'>{title}</h4>
        </div>
    )
}

export default PageTitle