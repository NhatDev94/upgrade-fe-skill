import React from 'react';

const Button = ({
    name = 'button',
    moreClass = 'bg-blue-500 text-white',
    onClick = () => {}
}) => {

    return (
        <div 
            className={moreClass + ' capitalize rounded-sm cursor-pointer text-sm font-semibold border px-5 py-1.5 hover:bg-gray-200'} 
            onClick={onClick}
        >
            {name}
        </div>
    )
}

export default Button