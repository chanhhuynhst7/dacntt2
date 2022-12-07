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
  //còn thiếu header chưa xử lí
  const {Content, Footer, Sider } = Layout;
  
  const SideBar = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    let navigate = useNavigate();
  
    const items = [
      getItem("Quản lí nhân viên", "q1", <TeamOutlined />, [
          getItem("Thông Tin nhân viên", "user"),
          getItem("Kiểm Tra nhân viên", "2"),
      ]),
      getItem("Quản lí kho", "q2", <DesktopOutlined />, [
          getItem("Thông Tin kho", "3"),
          getItem("Kiểm Tra kho", "4"),
      ]),
      getItem("Quản lí nhà sản xuất", "q3", <FileOutlined />, [
        getItem("Thông Tin nhà sản xuất", "producers"),
     ]),
      getItem("Quản lí sản phẩm", "q4", <TeamOutlined />, [
          getItem("Thông Tin sản phẩm", "items"),
      ]),
      getItem("Quản lí đối tác", "q5", <PieChartOutlined />, [
          getItem("Thông Tin đối tác", "customers"),
      ]),
      getItem("Quản lí phương tiện", "q6", <UserOutlined />, [
        getItem("Quản lí phương tiện cảng", "q7", <UserOutlined />, [
          getItem("Thông tin phương tiện cảng", "mytransports"),
        ]),
        // getItem("Quản lí phương tiện đối tác", "q7", <UserOutlined />, [
        //   getItem("Thông tin phương tiện đối tác", "11"),
        //   getItem("Kiểm tra phương tiện đối tác", "12"),
        // ]),
      ]),
      getItem("Quản lí đơn hàng", "q8", <UserOutlined />, [
          getItem("Đơn hàng", "q9", <UserOutlined />, [
            getItem("Nhập hàng ", "importorders"),
            getItem("Xuất hàng ", "exportorders"),
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
      if (key === "user" || key ==="producers" || key ==="items" || key === "customers"  || key === "mytransports" || key === "exportorders" || key ==="importorders" || key ==="xuatdonhang") {
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
  export default SideBar;