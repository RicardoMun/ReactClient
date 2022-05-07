import React from "react";
import { Layout } from "antd";
import MenuTop from "../components/AdminComponents/MenuTop"
import "./LayoutAdmin.scss"

export default function LayoutAdmin(props){
    const { children } = props;
    
    const { Header, Content, Footer} = Layout
    return (
        <Layout>
            <Layout className="layout-admin">
                <Header className="layout-admin__header">
                    <MenuTop></MenuTop>
                </Header>
                <Content className="layout-admin__content">{children}</Content>
                <Footer className="layout-admin__footer">Proyecto React 2022</Footer>
            </Layout>           
        </Layout>
    )
}