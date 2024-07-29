import React from 'react';

import { Link, Route, Routes } from 'react-router-dom';

import Home from './Homc';

import About from './About';

import Contact from './Contact';

import Login from './Login';

import Header from './Header';  // Import Header component

 

export default function Navi() {

    return (

        <div>

            <Header />  {/* Use Header component */}

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                <ul className="navbar-nav mr-auto">

                    <li className="nav-item active">

                        <Link to="/" className="nav-link">HOME</Link>

                    </li>

                    <li className="nav-item active">

                        <Link to="/about" className="nav-link">ABOUT</Link>

                    </li>

                    <li className="nav-item active">

                        <Link to="/contact" className="nav-link">CONTACT</Link>

                    </li>

                </ul>

            </nav>

            <Routes>

                <Route exact path="/" element={<Home />} />

                <Route path="/about" element={<About />} />

                <Route path="/contact" element={<Contact />} />

                <Route path="/login" element={<Login />} />

            </Routes>

        </div>

    );

}