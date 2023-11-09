// Resume.js

import React from 'react';
import './Resume.css';
import ResumePDF from './resume.pdf';

function Resume() {
  return (
    <section id="resume">
      <div className="resume-download">
        <h2>Resume</h2>
        <a href={ResumePDF} download className="button s-button">
          Download CV
        </a>
      </div>
    </section>
  );
}

export default Resume;
