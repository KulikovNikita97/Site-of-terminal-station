import React, { useState } from 'react';
import Admin from './Admin';
import 'antd/dist/antd.css';
import { Button, Checkbox, Form, Input } from 'antd';

const Logging = () => {
    const [adminMe, setAdminMe] = useState(false);

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return <div>
        {adminMe || window.localStorage.getItem('setAdminMe')
            ? <Admin />
            : <Form style={{ paddingTop: '50px' }}
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 8,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" onClick={() => {
                        setAdminMe(true);
                        window.localStorage.setItem('setAdminMe', true);
                        window.history.pushState(null, null, '/admin');
                    }}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        }
    </div>

}

export default Logging;