import React from 'react';
import logo from '../../assets/img/logo.png';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header__content">
            <div className="header-title">
                <Link to="/" className="header-link header-title">
                    <img className="header-logo" src={logo} alt="logo" />
                    <div>Статистика евролиги</div>
                </Link>
            </div>
            <div className="header-links">
                <Link className="header-link" to="/competitions">все Лиги</Link>
                <a className="header-link" href="#">все Команды</a>
            </div>
        </div>
    )
}
export default Header;