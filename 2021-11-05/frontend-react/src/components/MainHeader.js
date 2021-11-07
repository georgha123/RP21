import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from "react-router-dom";
import 'antd/dist/antd.css';

const { Header } = Layout;

function MainHeader(){
    
    return (

        <Layout>
            <Header>
                <Menu theme="dark" mode="horizontal"    >
                    <Menu.Item>
                        <span>Home</span>
                        <Link to="/"/>
                    </Menu.Item>
                    <Menu.Item>
                        <span>Login</span>
                        <Link to="/login"   />
                    </Menu.Item>
                    <Menu.Item>
                        <span>Register</span>
                        <Link to="/register"   />
                    </Menu.Item>
                    <Menu.Item>
                        <span>Posts</span>
                        <Link to="/posts"   />
                    </Menu.Item>
                    <Menu.Item>
                        <span>View Posts</span>
                        <Link to="/viewposts"   />
                    </Menu.Item>

                </Menu>
            </Header>
        </Layout>
    )

}

export default MainHeader;