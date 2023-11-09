// Projects.js
import React from 'react';
import './Projects.css'; // assuming you have a CSS file named Projects.css for styling

function Projects() {
    return (
        <section id="projects" className="centered-section">
            <div className="centered-content">
                <div className="centered-text">
                    <h1><strong>MY PROJECTS</strong></h1>
                    <h2>Live Demo with Github code </h2>
                </div>
            </div>

            {/* Add some space here */}
            <div className="spacer"></div>
            <div className="projects-container">
            <div className="project-card">
                <img src="../../image/htmlJavascript.png" alt="HTML, CSS, and Javascript" className="project-image" />
                <h3>HTML, CSS, and Javascript</h3>
                <p>
                    <strong>Technologies Used:</strong> HTML, CSS, and Javascript skills used in the registration form.
                </p>
                <div className="project-links">
                    <a href="https://youtu.be/rI3e9fGIdGk" target="_blank" rel="noopener noreferrer">Live Demo</a>
                    <a href="https://github.com/waryad/WebDevelopment-Registeration-form1" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
            </div>

            <div className="project-card">
                <img src="../../image/Java2.png" alt="Java Project" className="project-image" />
                <h3>Java</h3>
                <p>
                    <strong>Technologies Used:</strong> Spring Frameworks, PostgreSQL, RestAPI
                </p>
                <div className="project-links">
                    <a href="https://youtu.be/U9Idb6E8T08" target="_blank" rel="noopener noreferrer">Live Demo</a>
                    <a href="https://github.com/waryad/JavaProject" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
            </div>

            <div className="project-card">
                <img src="../../image/ThymleafJava.jpg" alt="SpringBoot cine reviews" className="project-image" />
                <h3>SpringBoot cine reviews</h3>
                <p>
                    <strong>Technologies Used:</strong> Spring Boot, Spring MVC, Thymeleaf, Spring Data JPA, Hibernate, Database (e.g., H2/MySQL/PostgreSQL), Bootstrap, CSS, JavaScript (if used), Maven/Gradle, Embedded Tomcat
                </p>
                <div className="project-links">
                    <a href="https://youtu.be/wVLPfRX98GU" target="_blank" rel="noopener noreferrer">Live Demo</a>
                    <a href="https://github.com/waryad/JavaEnterprise1" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
            </div>

            <div className="project-card">
                <img src="../../image/Xaml.jpg" alt="WPF Product Management System" className="project-image" />
                <h3>WPF Product Management System</h3>
                <p><strong>Technologies Used:</strong> WPF (Windows Presentation Foundation), XAML, C#, Entity Framework, LINQ, SQL Server (assumed based on usage of Entity Framework).</p>
                <div className="project-links">
                    <a href="https://youtu.be/PZLF4XlxFUk" target="_blank" rel="noopener noreferrer">Live Demo</a>
                    <a href="https://github.com/waryad/Xaml-.Net-Project-Add-Product" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
            </div>

            <div className="project-card">
                <img src="../../image/WPF.png" alt="ADO.NET Sample Application" className="project-image" />
                <h3>ADO.NET Sample Application</h3>
                <p><strong>Technologies Used:</strong> ADO.NET, C#, SQL Server, and more.</p>
                <div className="project-links">
                    <a href="https://youtu.be/LmojQtEXoKo" target="_blank" rel="noopener noreferrer">Live Demo</a>
                    <a href="https://github.com/waryad/WPF--Add-Continents-country-city" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
            </div>

            {/* Add more project cards as needed */}
            <div className="project-card">
                <img src="../../image/Ajax.jpg" alt="Mobile web" className="project-image" />
                <h3>Mobile Web Application"</h3>
                <p><strong>Technologies Used:</strong> JavaScript for client-side web scripting, AJAX for fetching JSON data, and HTML/CSS for web page layout and styling.</p>
                <div className="project-links">
                    <a href="https://youtu.be/PQ6jKjqKdwo" target="_blank" rel="noopener noreferrer">Live Demo</a>
                    {/* Replace '#' with actual GitHub link if you have one */}
                    <a href="https://github.com/waryad/Mobile-Web-AJAX" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>   
            </div>
            <div className="project-card">
                <img src="../../image/Reactjs.jpg" alt="Mobile web" className="project-image" />
                <h3>React My Personal Portfolio </h3>
                <p><strong>Technologies Used:</strong> Node.js, React.Js, JavaScript (ES6+), HTML5, CSS3, and frameworks like Bootstrap or Flexbox/Grid to help with responsiveness, Git for development and deployment.</p>
                <div className="project-links">
                    <a href="https://youtu.be/BCcaB10wfIk" target="_blank" rel="noopener noreferrer">Live Demo</a>
                    {/* Replace '#' with actual GitHub link if you have one */}
                    <a href="https://github.com/waryad/deepinder-portfolio/tree/master" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
                </div>
            
            </div>
        </section>
    );
}

export default Projects;
