import React from "react";
import Logo from "../../../assets/img/png/Logo.png";
import { Button } from "antd"
import { MenuUnfoldOutlined, MenuFoldOutlined, PoweroffOutlined } from "@ant-design/icons"
import "./MenuTop.scss";

export default function MenuTop(props){
    const { menuCollapsed, setMenuCollapsed } = props;
    
    return (
        <div className="menu-top">
            <div className="menu-top__left">
                <img className="menu-top__left-logo" alt="Logo" src={Logo}></img>
                <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
                    {menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </Button>
            </div>
            <div className="menu-top__right">
                <Button type="link" onClick={() => console.log("Log off")}>
                    <PoweroffOutlined />
                </Button>
            </div>
        </div>
    );
}