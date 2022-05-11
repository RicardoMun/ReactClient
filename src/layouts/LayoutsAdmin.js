import React, {useState} from "react";
import { Layout } from "antd";
import MenuTop from "../components/AdminComponents/MenuTop"
import MenuSider from "../components/AdminComponents/MenuSider"
/* import Logo from "../assets/img/png/Logo.png"; */
import "./LayoutAdmin.scss"

export default function LayoutAdmin(){
    const [menuCollapsed, setMenuCollapsed] = useState(false);
    const {Header, Content, Footer} = Layout;

    return (
        <Layout>
            <MenuSider menuCollapsed={menuCollapsed} />
            <Layout className="layout-admin" style={{ marginLeft: menuCollapsed ? "80px" : "200px"  }}>
                <Header className="layout-admin__header">
                    <MenuTop
                        menuCollapsed = {menuCollapsed}
                        setMenuCollapsed = {setMenuCollapsed}
                    />
                </Header>

                <Content className="layout-admin__content">
                    {/* <h1>Rutas</h1> */}
                    {/* <img className="menu-top__left-logo" alt="Logo" src={Logo}></img>  */}
                </Content>
                <Footer className="layout-admin__footer">Proyecto React 2022</Footer>
            </Layout>
        </Layout>
    )
}