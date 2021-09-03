import React from "react";
import logo from "../../assets/img/logo.png";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="header__content">
                <div className="header-title">
                    <Link to="/" className="header-title">
                        <img className="header-logo" src={logo} alt="logo" />
                        <div>Статистика евролиги</div>
                    </Link>
                </div>
                <div className="header-links">
                    <Link className="header-link" to="/competitions">
                        Лиги
                    </Link>
                    <Link className="header-link" to="/teams">
                        Команды
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default Header;
