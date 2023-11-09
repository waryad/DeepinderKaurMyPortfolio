// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav>
      <div className="navbar-image">
        <img src="../../image/Mypic7.jpeg" alt="Your Image" />
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about-me">About Me</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/contact">Contact Me</Link>
      </div>
    </nav>
  );
}

export default Navigation;
