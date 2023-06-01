import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
    return (
        <nav className="Header">
            <ul className="navlink">
                <Link to="/">
                    Mainmenu
                </Link>
            </ul>
            <ul className="navlink">
                Geography Information
            </ul>
            <ul className="navlink">
                <Link to="/login">
                    Login
                </Link>
            </ul>
        </nav>
    )
}
