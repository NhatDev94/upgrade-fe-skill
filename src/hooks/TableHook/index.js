import React from 'react';
import { Table } from 'antd'

const TableHook = ({
    // values: [],
    // columns: []
}) => {
    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: Math.random()
        }
    ]

    const values = [
        {
            id: 'day la id',
            key: Math.random()
        },
        {
            id: 'day la id',
            key: Math.random()
        }
    ]
    return (
        <Table
            dataSource={values}
            columns={columns}
        />
    )
}

export default TableHook