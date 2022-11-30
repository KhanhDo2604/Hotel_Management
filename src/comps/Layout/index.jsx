import "./Layout.scss";
import logo from "../../assets/logo.jpg";
import icon from "../../assets/sort.svg";
import noti from "../../assets/bell2.png";
import avatar from "../../assets/avatar.jpg";
import logout from "../../assets/logout.png";

import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { routes } from "../../routes.js";

export default function Layout({ children }) {
    const [sidebar, setSidebar] = useState(true);
    const navRef = useRef(null);

    const marginLeft = navRef.current ? -navRef.current.getBoundingClientRect().width : undefined;

    return (
        <div className="wrapper">
            <aside ref={navRef} className="sidebar" style={{ marginLeft: sidebar ? "0px" : marginLeft }}>
                <img className="logo" src={logo} alt="logo" />

                <div className="nav">
                    {
                        routes.map((value, index) => {
                            let className;
                            if (value.path === "/") {
                                className = location.pathname === "/" ? "nav-item active" : "nav-item";
                            }
                            else {
                                className = location.pathname.includes(value.path) ? "nav-item active" : "nav-item";
                            }
                            return (
                                <Link key={index} to={value.path} className={className}>
                                    <img src={value.icon} alt="nav-cover" />
                                    <h4>{value.name}</h4>
                                </Link>
                            )
                        })
                    }
                </div>
            </aside>
            <div className="container">
                <header className="header">
                    <button className="header-btn" onClick={_ => setSidebar(!sidebar)}>
                        <img src={icon} alt="icon" />
                    </button>

                    <div className="user-selection">
                        <button className="header-btn">
                            <img src={noti} alt="bell" />
                        </button>
                        <button className="header-btn">
                            <img src={logout} alt="logout" />
                        </button>
                        <button className="header-btn avatar" style={{backgroundImage: `url(${avatar})`}}></button>
                    </div>
                </header>
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    );
}