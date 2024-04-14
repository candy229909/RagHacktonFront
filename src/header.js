import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./header.css";

export default function Header() {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <div className="header-wrapper">
            <div className="logo">
                <h2>MS</h2>
            </div>
            <div className="hamburger-main">
                <div className={`hamburger-icon ${isActive ? "active" : ""}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                </div>
                <div className={`mega-menu ${isActive ? "active" : ""}`}>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/data">Use data</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
