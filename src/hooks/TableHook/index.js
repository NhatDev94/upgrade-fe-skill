import React from 'react';
import { Button, Input, Table } from 'antd'

import './index.css'

const TableHook = ({
    values = [],
    columns = [],
    rightHeader,
    onRow = () => {},
}) => {

    const formatColumns = (cols) => {
        return cols.filter(item => item.table)
            .map(item => {
                const columns = {
                    ...item,
                    dataIndex: item.name,
                    key: Math.random()
                }
                delete columns.name
                return columns
            })
    }

    const formatValues = vlaues => {
        return values.map(item => {
            item.key = Math.random()
            return item
        })
    }

    // console.log(formatValues(values));
    // console.log(formatColumns(columns));

    return (
        <div className=''>
            <div className='w-full h-fit flex items-center justify-between mb-5'>
                {/* Search */}
                <div className='w-1/4 '>
                    <Input className='py-2 rounded-md' placeholder='Search...' />
                </div>

                {/* Right Header */}
                {rightHeader && rightHeader}
            </div>

            <Table
                dataSource={formatValues(values)}
                columns={formatColumns(columns)}
                bordered={true}
                onRow={onRow}
            />

        </div>
    )
}

export default TableHook