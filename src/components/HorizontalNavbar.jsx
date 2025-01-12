import React from 'react';

const HorizontalNavbar = () => {
    return (
        <nav className="nav justify-content-end bg-dark nav-small">
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link" href="#home"><i className="fa-solid fa-house"></i> Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#about"><i className="fa-solid fa-user"></i> About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#resume"><i className="fa-solid fa-suitcase"></i> Resume</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#portfolio"><i className="fa-solid fa-folder"></i> Portfolio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#contact"><i className="fa-solid fa-envelope"></i> Contact</a>
                </li>
            </ul>
        </nav>
    );
};

export default HorizontalNavbar;
