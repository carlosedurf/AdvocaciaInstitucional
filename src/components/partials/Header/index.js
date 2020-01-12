import React from 'react';
import { Link } from "react-router-dom";

import './style.css';
import Logo from '../../../Assets/Images/logo.jpeg';

import Menu from '../Menu';

const Header = () => {

    return(
        <div className="header">
            <div className="header-center">
                <div className="header-logo">
                    <Link to="/">
                        <img src={Logo} alt="" height="40"/>
                    </Link>
                </div>
                <div className="header-menu">
                    <Menu/>
                </div>
            </div>
        </div>
    );

}

export default Header;