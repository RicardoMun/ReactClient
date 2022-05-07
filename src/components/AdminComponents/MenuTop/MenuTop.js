import React from "react";
/* import Logo from "../../../assets/img/png/Logo.png"; */

import "./MenuTop.scss";

export default function MenuTop(){
    return (
        <div className="menu-top">
            <div className="menu-top__left">
                {/* <img className="menu-top__left-logo" alt="Logo" src={Logo}></img> */}
            </div>
            <div className="menu-top__right">
                <h3>Logout</h3>
            </div>
        </div>
    );
}