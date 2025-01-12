import React from 'react';
import HorizontalNavbar from '../components/HorizontalNavbar';
import VerticalNavbar from "../components/VerticalNavbar";
import Hero from '../components/Hero';
import About from '../components/About';
import Resume from '../components/Resume';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';
import ContactForm from "@/components/ContactForm";


const Home = () => (
    <div className="container-fluid">
        <div className="row">
            {/* Vertical Navbar: Shown on Larger Screens */}
            <div className="col-md-3 justify-content-center bg-dark text-white p-0 nav-large">
                <VerticalNavbar/>
            </div>

            {/* Horizontal Navbar: Shown on Smaller Screens */}
            <HorizontalNavbar/>

            {/* Main Content */}
            <div className="col-sm-12 col-lg-9 p-0 hero">
                <Hero/>
                <div className="content">
                    <About/>
                    <Resume/>
                    <Portfolio/>
                    <ContactForm/>
                </div>
                <Footer/>
            </div>
        </div>
    </div>
);

export default Home;
