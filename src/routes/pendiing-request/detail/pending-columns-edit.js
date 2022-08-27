import React from 'react';

const PendingColumnsEdit = [
    {
        title: 'Name',
        name: 'name',
        form: {
            colspan: 4,
            rules: [{type: 'required'}]
        }
    },
    {
        title: 'Address',
        name: 'address',
        form: {
            colspan: 4,
            rules: [{type: 'required'}]
        }
    },
]

export default PendingColumnsEdit