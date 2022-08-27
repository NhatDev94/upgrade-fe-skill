import { Modal } from 'antd';
import React, { useState } from 'react';
import './index.css';

const ModalHook = ({
    title = 'Title',
    getModalInfomation = () => {},
    width = 700,
    children = ""
}) => {

    const [isVisible, setIsVisible] = useState(false)

    // send setIsVisible to Parent Component
    getModalInfomation({
        setIsVisible,
    })

    return (
        <div className=''>
            <Modal
                title={title}
                visible={isVisible}
                onCancel={() => setIsVisible(false)}
                width={width + 'px'}
            >
                {children}
            </Modal>
        </div>
    )
}

export default ModalHook