import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact & Connect</h2>
      <div className="contact-container">
        <ContactCard
          icon="far fa-envelope"
          label="Email"
          value="dwarya8@gmail.com"
          gradientColor="linear-gradient(135deg, #3498db, #d74090)"
        />
        <ContactCard
          icon="fas fa-phone"
          label="Phone"
          value="647-907-8425"
          gradientColor="linear-gradient(135deg, #3498db, #d74090)"
        />
      </div>
      <div className="social-links">
        <SocialLink icon="fab fa-github" label="GitHub" link="https://github.com/waryad" />
        <SocialLink icon="fab fa-linkedin" label="LinkedIn" link="https://linkedin.com/in/deepinderw" />
      </div>
    </section>
  );
};

const ContactCard = ({ icon, label, value, gradientColor }) => {
  return (
    <div className="contact-card" style={{ background: gradientColor }}>
      <i className={`contact-icon ${icon}`}></i>
      <div className="contact-info">
        <h3>{label}</h3>
        <p>{value}</p>
      </div>
    </div>
  );
};

const SocialLink = ({ icon, label, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="social-link">
      <i className={`social-icon ${icon}`}></i>
      {label}
    </a>
  );
};

export default Contact;
