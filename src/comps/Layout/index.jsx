import "./Layout.scss";
import logo from "../../assets/hotelLogo.png";
import icon from "../../assets/sort.svg";
import avatar from "../../assets/main_logo.png";
import logout from "../../assets/logout.png";

import { useState, useRef } from "react";
import { Link,useNavigate } from "react-router-dom";
import { routes } from "../../routes.js";
import NoticeModal from "../NoticeModal";

const { ipcRenderer } = require("electron");

export default function Layout({ children }) {
    const [modalState, setModalState] = useState(false);

    const openModal = () => {
        setModalState(!modalState);
    }

    const logOut = () => {
        console.log("hello world");
        // navigate("/");
    }

    const [sidebar, setSidebar] = useState(true);
    const navRef = useRef(null);
    const navigate = useNavigate();

    const marginLeft = navRef.current ? -navRef.current.getBoundingClientRect().width : undefined;

    const role = ipcRenderer.sendSync("get-user").role;

    return (
        <div className="wrapper">
            <aside ref={navRef} className="sidebar" style={{ marginLeft: sidebar ? "0px" : marginLeft, position: 'relative' }}>
                <img className="logo" src={logo} alt="logo" />

                <div className="nav">
                    {
                        routes.filter((value) => value.role === role).map((value, index) => {
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

            {/* Thanh bar ngang */}
            <div className="container">
                <header className="header">
                    <button className="header-btn" onClick={_ => setSidebar(!sidebar)}>
                        <img src={icon} alt="icon" />
                    </button>

                    <div className="user-selection">
                        <button className="header-btn" onClick={openModal}>
                            <img src={logout} alt="logout" />
                        </button>
                        <button className="header-btn avatar" style={{backgroundImage: `url(${avatar})`}}></button>
                    </div>
                </header>
                <div className="content">
                    {children}
                </div>
                <NoticeModal toggle={modalState} hide={openModal} action={logOut} title={"Log Out"} content={"Do you want to log out ?"}/>
            </div>
        </div>
    );
}