import { Form, Input } from 'antd';
import React from 'react';

import './index.css'

const FormComponent = ({
    columns = [],
    values = {}
}) => {
    const [form] = Form.useForm()

    const getRule = (rule = {}, title) => {
        switch (rule?.type) {
            case 'required':
                return { required: true, message: `Please input your ${title.toLowerCase()}` }
            // case 'min':
            //     const func = ({ getFieldValue }) => ({
            //         validator(_, value) {
            //             if (!value || getFieldValue('password') === value) {
            //                 return Promise.resolve();
            //             }

            //             return Promise.reject(new Error('The two passwords that you entered do not match!'));
            //         },
            //     })
            //     return func
            default:
                break;
        }
    }

    const generateFormItem = (column, index) => {
        let rules = []
        if (column?.form?.rules) {
            column.form.rules.map(rule => rules = [...rules, getRule(rule, column?.title)])
        }

        return (
            <Form.Item
                name={column.name}
                label={column.title}
                key={index}
                rules={rules}
                // hasFeedback
                className={`col-span-${Number(column?.form.colspan) || 12}`}
            >
                <Input />
            </Form.Item>
        )
    }

    return (
        <Form
            initialValues={values}
            form={form}
        >
            <div className='grid grid-cols-12 gap-5'>
                {
                    columns.map((column, index) => generateFormItem(column, index))
                }
            </div>
        </Form>
    )
}

export default FormComponent