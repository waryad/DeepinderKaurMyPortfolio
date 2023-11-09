// App.js
import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Resume from './components/Resume';
import Navigation from './components/Navigation/Navigation'; // Make sure to import the Navigation component

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar bg="dark" variant="dark">
          <Container>
            <Nav className="me-auto">
              <Navigation /> {/* Include the Navigation component */}
            </Nav>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume/>}/>
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>

);
}


export default App;
