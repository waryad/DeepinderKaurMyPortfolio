import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills-section">
      <h1>Developer Services</h1>
      <div className="skills-grid">
        <SkillCard
          iconClass="fab fa-react"
          title="Frontend Development"
          description="Building responsive and interactive websites using React, Vue, and Angular."
        />
        <SkillCard
          iconClass="fab fa-node"
          title="Backend Development"
          description="Creating robust backends with Node.js, Express, and databases like MongoDB and SQL."
        />
        <SkillCard
          iconClass="fas fa-code"
          title="Full Stack Development"
          description="Delivering end-to-end solutions with a combination of frontend and backend technologies."
        />
        <SkillCard
          iconClass="fab fa-git"
          title="Version Control"
          description="Expertise in Git and collaboration tools like GitHub and GitLab."
        />
      </div>
    </div>
  );
};

const SkillCard = ({ iconClass, title, description }) => {
  return (
    <div className="skill-card">
      <i className={`skill-icon ${iconClass}`}></i>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Skills;
