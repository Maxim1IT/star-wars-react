import React from 'react';
import './Header.css'
import { Link } from "react-router-dom";

function Header(props) {
    return (
        <header>
            <div className="logo">
                <Link to="/">
                    <img src="https://logolook.net/wp-content/uploads/2021/07/Star-Wars-Logo.png" alt=""/>
                </Link>
            </div>
        </header>
    );
}

export default Header;