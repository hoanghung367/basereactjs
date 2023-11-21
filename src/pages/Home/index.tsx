// AdminDashboard.js

import React from 'react';
import { Layout, Menu, Table } from 'antd';
import {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
} from '@ant-design/icons';
import { Box, Typography } from '@mui/material';
import CustomButton from '../../components/Button';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const dataSource = [
    {
        key: '1',
        name: 'John Doe',
        age: 30,
        address: '123 Main St',
    },
    {
        key: '2',
        name: 'Jane Smith',
        age: 25,
        address: '456 Park Ave',
    },
    // Thêm dữ liệu khác nếu cần
];

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    // Thêm các cột khác nếu cần
];

const AdminDashboard = () => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                width={280}
                style={{ background: '#fff' }}
            >
                <Box style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', height: '100vh', borderRight: '1px solid var(--gray-200, #EAECF0)' }}>
                    <Box style={{overflow: 'hidden', height: '100%'}}>
                        <Box style={{height: '64px', borderBottom: '1px solid red'}}>Hedaer</Box>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0, overflow: 'auto' }}
                        >
                            <SubMenu key="sub1" icon={<UserOutlined rev={'abc'} />} title="SubMenu 1">
                                <Menu.Item key="1">Option 1</Menu.Item>
                                <Menu.Item key="2">Option 2</Menu.Item>
                                <Menu.Item key="3">Option 3</Menu.Item>
                                <Menu.Item key="4">Option 4</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" icon={<LaptopOutlined rev={'abc'} />} title="SubMenu 2">
                                <Menu.Item key="5">Option 5</Menu.Item>
                                <Menu.Item key="6">Option 6</Menu.Item>
                                <Menu.Item key="7">Option 7</Menu.Item>
                                <Menu.Item key="8">Option 8</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" icon={<NotificationOutlined rev={'abc'} />} title="SubMenu 3">
                                <Menu.Item key="9">Option 9</Menu.Item>
                                <Menu.Item key="10">Option 10</Menu.Item>
                                <Menu.Item key="11">Option 11</Menu.Item>
                                <Menu.Item key="12">Option 12</Menu.Item>
                            </SubMenu>
                            <SubMenu popupOffset={[0, 10]} className='submenu-bottom' key="sub3" icon={<NotificationOutlined rev={'abc'} />} title="SubMenu 3">
                                <Menu.Item key="9">Option 9</Menu.Item>
                                <Menu.Item key="10">Option 10</Menu.Item>
                                <Menu.Item key="11">Option 11</Menu.Item>
                                <Menu.Item key="12">Option 12</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Box>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                    >
                        <SubMenu key="sub1" icon={<UserOutlined rev={'abc'} />} title="SubMenu 1">
                            <Menu.Item key="1">Option 1</Menu.Item>
                            <Menu.Item key="2">Option 2</Menu.Item>
                            <Menu.Item key="3">Option 3</Menu.Item>
                            <Menu.Item key="4">Option 4</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Box>

            </Sider>
            <Layout style={{ background: '#fff'}}>
                <Header className="header" style={{ background: '#fff', padding: 0, borderBottom: '1px solid red' }}>
                    <Box style={{alignItems: 'center', display: 'flex', paddingLeft: 32, paddingRight: 32, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Box>
                            <Typography>Card</Typography>
                        </Box>
                        <Box>
                            <CustomButton icon={<NotificationOutlined rev={'abc'} />} style={{background: '#6938EF'}} type='primary' text='Thêm thẻ' />
                        </Box>
                    </Box>
                </Header>
                <Content style={{ margin: '26px 32px 0 32px' }}>
                    <div className="site-layout-background" style={{ minHeight: 360 }}>
                        <Table dataSource={dataSource} columns={columns} scroll={{ x: true }} />
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default AdminDashboard;

