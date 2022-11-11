import { MenuFoldOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import React from 'react'
import "./HomePage.less";
import {MenuUnfoldOutlined, UserOutlined} from "@ant-design/icons";
const { Header, Footer, Sider, Content } = Layout;

export const HomePage = () => {
  return (
    <div >
      <Layout className="body">
      <Header className="Header">
        <h1>Header</h1>
        </Header>

      <Content className="Content">
        <h1>Content ne cha</h1>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
    
    </div>
    
  )
  }

