import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TableHook from '../../hooks/TableHook';
import Button from '../../layouts/components/button';
import PageTitle from '../../layouts/components/page-title'
import { routerLink } from '../../routerLink';
import PendingService from '../../services/pending-service';
import { PendingColumns } from './pending-columns';

const PendingRequest = () => {
    const navigate = useNavigate()

    const [pendings, setPendings] = useState()

    const getAllPending = useCallback(async () => {
        const data  = await PendingService.getPendings()
        setPendings(data?.data)
    }, [])

    useEffect(() => {
        getAllPending()
    }, [getAllPending])

    return (
        <div className=''>
            <PageTitle title='Pending Request' />

            <div className='bg-white mt-5 rounded-md p-5 shadow-md border border-gray-200'>
                <TableHook 
                    values={pendings} 
                    columns={PendingColumns} 
                    onRow={(record) => {
                        return {
                            onClick: () => navigate(`${routerLink('pending-detail')}/${record.merchantId}`)
                        }
                    }} 
                />
            </div>
        </div>
    )
}

export default PendingRequest