import React from 'react';

const VerticalNavbar = () => {
    return (
        <div className="container mt-5">
            <nav className="nav flex-column d-inline text-center">
                <h2 className="w-100">Sara Perez(Golbek)</h2>
                <h6>Web Developer</h6>
                <hr className="border-light mb-0"/>
                <p className="media-accounts">
                    <a className="nav-link d-inline-block vertical-nav-link" target="blank"
                       href="https://www.facebook.com/sara.golbek">
                        <i className="fa-brands fa-facebook"></i>
                    </a>&#9642;
                    <a className="nav-link d-inline-block vertical-nav-link" target="blank"
                       href="https://www.instagram.com/saragolbek/">
                        <i className="fa-brands fa-instagram"></i>
                    </a>&#9642;
                    <a className="nav-link d-inline-block vertical-nav-link" target="blank"
                       href="https://www.linkedin.com/in/sara-golbek-9b62b8295">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>&#9642;
                    <a className="nav-link d-inline-block vertical-nav-link" target="blank" href="https://github.com/SaraGolbek">
                        <i className="fa-brands fa-github"></i>
                    </a>
                </p>
                <a className="nav-link vertical-nav-link" href="#home"><i className="fa-solid fa-house"></i> Home</a>
                <a className="nav-link vertical-nav-link" href="#about"><i className="fa-solid fa-user"></i> About</a>
                <a className="nav-link vertical-nav-link" href="#resume"><i className="fa-solid fa-suitcase"></i> Resume</a>
                <a className="nav-link vertical-nav-link" href="#portfolio"><i className="fa-solid fa-folder"></i> Portfolio</a>
                <a className="nav-link vertical-nav-link" href="#contact"><i className="fa-solid fa-envelope"></i> Contact</a>
            </nav>
        </div>
    );
};

export default VerticalNavbar;
