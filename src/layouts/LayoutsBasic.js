import React, { useState } from "react";
import { Layout } from "antd";
import MenuTop from "../components/AdminComponents/MenuTop";
import MenuSider from "../components/AdminComponents/MenuSider";
import {GithubOutlined  } from "@ant-design/icons";

import "./LayoutBasic.scss";

export default function LayoutBasic(props) {
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const { Header, Content, Footer } = Layout;
  const { children } = props;

  
    return (
      <Layout>
        <MenuSider menuCollapsed={menuCollapsed} />
        <Layout className="layout-admin" style={{ marginLeft: menuCollapsed ? "80px" : "200px" }}>
          <Header className="layout-admin__header">
            <MenuTop menuCollapsed={menuCollapsed} setMenuCollapsed={setMenuCollapsed} />
          </Header>
          <Content className="layout-admin__content">{children}</Content>
          <Footer className="layout-admin__footer">
            <GithubOutlined style={{ fontSize: '17px' }} /> <a href="https://github.com/RicardoMun?tab=repositories">RicardoMun</a>
          </Footer>
        </Layout>
      </Layout>
    );
  }




/* import React from "react";
import { Layout } from "antd";

export default function LayoutBasic(props) {
  const { children } = props;
  
  return (
    <Layout>
      <Layout>
        <h2>Menú</h2>
        <div>{children}</div>
        <h5>Footer</h5>
      </Layout>
    </Layout>
  );
} */