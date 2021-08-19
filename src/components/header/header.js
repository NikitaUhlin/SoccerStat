import React from 'react';
import logo from '../../assets/img/logo.png';
import './header.css';

const Header = () => {
    return (
        <div className="header__content">
            <div className="header-title">
                <img className="header-logo" src={logo} alt="logo" />
                <div>Статистика евролиги</div>
            </div>
            <div className="header-links">
                <a className="header-link" href="#">Лиги</a>
                <a className="header-link" href="#">Команды</a>
            </div>
        </div>
    )
}
export default Header;