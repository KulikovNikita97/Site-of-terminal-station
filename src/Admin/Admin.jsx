import React from 'react';
import 'antd/dist/antd.css';
import { SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link, Outlet } from 'react-router-dom';

function getItem(label, key, icon, children, type) {
    return { key, icon, children, label, type };
}

const items = [
    getItem('Administration Board', 'sub4', <SettingOutlined />, [
        getItem('General statistic', 'g1', null, [
            getItem('Entering users', '1', <Link to="/admin/entering"></Link>),
            getItem('Buying users', '2', <Link to="/admin/buying"></Link>)
        ], 'group'),
        getItem('Local statistic', 'g1', null, [
            getItem('Gender composition', '3', <Link to="/admin/gender"></Link>),
            getItem('From where arrive', '4', <Link to="/admin/from_where"></Link>),
            getItem('To where departure', '5', <Link to="/admin/to_where"></Link>),
        ], 'group'),
    ]),
];

const Admin = () => {
    const onClick = (e) => {
        console.log('click ', e);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'flex-start', padding: '10px 0 0 0' }} >
            
            <Menu
                onClick={onClick}
                style={{
                    width: 256,
                    height: 'calc(100vh - 72px)'
                }}
                defaultSelectedKeys={[]}
                defaultOpenKeys={['sub4']}
                mode="inline"
                items={items}
            />

            <Outlet />
            

        </div >
    );
};

export default Admin;