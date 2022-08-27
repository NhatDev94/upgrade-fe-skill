import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PendingService from '../../../services/pending-service';

import { useParams } from 'react-router-dom';
import PageTitle from '../../../layouts/components/page-title';
import Button from '../../../layouts/components/button';
import { routerLink } from '../../../routerLink';
import ModalHook from '../../../hooks/ModalHook';
import FormComponent from '../../../components/form';
import PendingColumnsEdit from './pending-columns-edit';

const PendingDetail = () => {
    const { merchantId } = useParams()
    const navigate = useNavigate()

    const [pending, setPending] = useState()

    const getPending = useCallback(async () => {
        const { data } = await PendingService.getPending(merchantId)
        setPending(data)
    }, [])

    useEffect(() => {
        getPending()
    }, [getPending])

    let setIsVisible = null


    return (
        <div className=''>
            <PageTitle title={'ID - ' + merchantId} />
            <div className=' rounded-md border border-gray-200 p-5 bg-white mt-5 shadow-md'>
                <div className='flex items-center justify-end mb-5'>
                    <Button
                        name='edit'
                        moreClass='bg-blue-500 text-white mr-5'
                        onClick={() => setIsVisible(true)}
                    />
                    <Button
                        name='Back'
                        moreClass='bg-white text-gray-700'
                        onClick={() => navigate(routerLink('pending'))}
                    />
                </div>

                <div className='flex items-center gap-5 flex-wrap'>
                    <div className='w-1/3'>
                        <h4 className='text-sm font-semibold mb-1 text-gray-800'>Branch Name</h4>
                        <p className=''>{pending?.name}</p>
                    </div>
                    <div className='w-1/3'>
                        <h4 className='text-sm font-semibold mb-1 text-gray-800'>Address</h4>
                        <p className=''>{pending?.address}</p>
                    </div>
                </div>
            </div>
            <ModalHook
                title='Edit Pending'
                getModalInfomation={(info) => {
                    setIsVisible = info.setIsVisible
                }}
            >
                <FormComponent columns={PendingColumnsEdit} values={pending} />
            </ModalHook>
        </div>
    )
}

export default PendingDetail