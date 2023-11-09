// Home.js
import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import './Home.css';

function Home() {
  const [text] = useTypewriter({
    words: ["Full Stack Developer."],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  return (
    <section id="home" className="flex items-center p-10">
      <div className="left-banner">
        <div className="custom-text-size font-bold mb-10">Welcome to My World</div>
        <div className="custom-text-size font-bold mb-4">
          Hi, I'm <span style={{ color: '#ff014f', fontSize: '40px' }}>Deepinder Kaur Warya</span>
        </div>

        <div className="text-4xl font-bold mb-4 custom-text-size">
          a <span className="text-designColor">{text}</span>
          <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="#ff014f" />
        </div>

        <div className="text-2xl text-left"></div>

        {/* Move "Find me on" above the social links */}
        <div className="text-xl mt-4">FIND ME ON:</div>
        <div className="social-links mt-2">
          <a href="https://github.com/waryad" target="_blank" rel="noopener noreferrer" className="social-link btn-github">
            GitHub
          </a>
          <a href="https://linkedin.com/in/deepinderw" target="_blank" rel="noopener noreferrer" className="social-link btn-linkedin">
            LinkedIn
          </a>
        </div>
      </div>

      <div className="right-banner">
        <img
          className="profile-pic"
          src="../../image/Mypic.jpg" // Update the path to your resized image
          alt="Your Image"
        />
      </div>
    </section>
  );
}

export default Home;
