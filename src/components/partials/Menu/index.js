import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const Menu = () => {

    return(
        <div className="menu">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">Sobre</Link></li>
                <li><Link to="/work">Trabalhos</Link></li>
                <li><Link to="/contact">Fale Conosco</Link></li>
            </ul>
        </div>
    );

}

export default Menu;