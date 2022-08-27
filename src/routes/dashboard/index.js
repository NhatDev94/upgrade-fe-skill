import React from 'react';
import FormComponent from '../../components/form';
import ModalHook from '../../hooks/ModalHook';
import TableHook from '../../hooks/TableHook';


const DashBoard = () => {
    const table = {
        setIsVisible: null
    }
    return (
        <div className=''>
            <TableHook
                rightHeader={(
                    <p 
                        className='cursor-pointer h-9 px-5 flex items-center justify-center font-semibold hover:bg-blue-400 rounded-sm bg-blue-500 text-white'
                        onClick={() => table.setIsVisible(true)}
                    >Add New</p>
                )}
            />
            <ModalHook getModalInfomation={(modalInfomation) => table.setIsVisible = modalInfomation.setIsVisible}>
                <FormComponent />
            </ModalHook>
        </div>
    )
}

export default DashBoard