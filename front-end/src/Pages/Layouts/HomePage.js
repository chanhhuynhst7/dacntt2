import { MenuFoldOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import React from 'react'
import "./HomePage.less"
import {MenuUnfoldOutlined, UserOutlined} from "@ant-design/icons";
const { Header, Footer, Sider, Content } = Layout;

export const HomePage = () => {
  return (
    <div >
    <Layout>
    <Header className="Header">
      <h3>Cảng Vận Chuyển
          Thành phố Hồ Chí Minh
      </h3>
      
      </Header>

    <Content className="Content">
    </Content>
    <Footer className="Footer">All right reserved @ Khmer Company</Footer>
  </Layout>
  
  </div>
  )
}
