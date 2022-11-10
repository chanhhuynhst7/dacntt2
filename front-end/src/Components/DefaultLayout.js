import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {Layout, Menu } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

const DefaultLayout = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  let navigate = useNavigate();

  const items = [
    getItem("Quản lí nhân viên", "q1", <TeamOutlined />, [
        getItem("Thông Tin nhân viên", "user"),
        getItem("Kiểm Tra nhân viên", "2"),
    ]),
    getItem("Quản lí kho", "q2", <TeamOutlined />, [
        getItem("Thông Tin kho", "3"),
        getItem("Kiểm Tra kho", "4"),
    ]),
    getItem("Quản lí sản phẩm", "q3", <TeamOutlined />, [
        getItem("Thông Tin sản phẩm", "item"),
        getItem("Kiểm Tra sản phẩm", "6"),
    ]),
    getItem("Quản lí đối tác", "q4", <TeamOutlined />, [
        getItem("Thông Tin dối tác", "7"),
        getItem("Kiểm Tra đối tác", "8"),
    ]),
    getItem("Quản lí phương tiện", "q5", <UserOutlined />, [
      getItem("Quản lí phương tiện cảng", "q6", <UserOutlined />, [
        getItem("Thông tin phương tiện cảng", "9"),
        getItem("kiểm tra phương tiện cảng", "10"),
      ]),
      getItem("Quản lí phương tiện đối tác", "q7", <UserOutlined />, [
        getItem("Thông tin phương tiện đối tác", "11"),
        getItem("Kiểm tra phương tiện đối tác", "12"),
      ]),
    ]),
    getItem("Quản lí đơn hàng", "q8", <UserOutlined />, [
        getItem("Đơn hàng trong ngày", "q9", <UserOutlined />, [
          getItem("Nhập hàng ", "13"),
          getItem("Xuất hàng ", "14"),
        ]),
        getItem("Đơn hàng lưu trữ", "q10", <UserOutlined />, [
          getItem("Nhập hàng", "15"),
          getItem("Xuất hàng", "16"),
        ]),
      ]),
    getItem("Thống kê", "q11", <TeamOutlined />, [
        getItem("Hàng hóa", "17"),
        getItem("Thu nhập", "18"),
    ]),
  ];
  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  const onClickMenu = ({ key }) => {
    if (key === "user" || key === "item") {
      navigate(`/${key}`);
    }
  };
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          onClick={onClickMenu}
        />
      </Sider>
      <Layout className="site-layout">
        {/*  
        <Header
          style={{
          }}
        />
        */}
        <Content
          style={{
          }}
        >
          {props.children}
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
        </Footer>
      </Layout>
    </Layout>
  );
};
export default DefaultLayout;
