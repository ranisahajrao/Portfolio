import "./Project.css";
import githubIcon from "../assets/github.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  return (
    <div id="project" className="container">
      <h2>My Projects</h2>
      <div className="projects">

        {/* Arina AI Project */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div className="body">
              <h3>Arina AI</h3>
              <p>
                Contributing to an AI-driven web platform that offers intelligent solutions across multiple domains.
                <br />
                <strong>Frontend Development:</strong> Designed and implemented user-friendly interfaces using Angular, ensuring seamless accessibility and enhanced user experience.
                <br />
                <strong>Backend Development:</strong> Developed and maintained server-side logic using Node.js, optimizing performance and security.
                <br />
                <strong>Performance Optimization:</strong> Improved system efficiency by optimizing API calls and front-end rendering.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>Qwen2.5-VL</li>
                <li>Unsloth</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* Client Project - 73 String */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div className="body">
              <h3>73 String</h3>
              <p>
                Developed a financial analytics platform where multiple AI models analyze data to generate detailed investment reports.
                <br />
                <strong>Data Processing & API Integration:</strong> Created and managed RESTful APIs to fetch real-time data for AI model processing.
                <br />
                <strong>Scalability & Security:</strong> Implemented security best practices and performance optimizations to handle large datasets efficiently.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* Investor Insights (Client Project) */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div className="body">
              <h3>Investor Insights</h3>
              <p>
                Developed a stock market-based platform that allows users to log in, add stocks, view reports, and track profits.
                <br />
                <strong>Tech Stack:</strong> Angular, Node.js, MS SQL Server.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Angular</li>
                <li>Node.js</li>
                <li>MS SQL Server</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* Assets Tracker (Internal Project) */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div className="body">
              <h3>Assets Tracker</h3>
              <p>
                Created an asset management system for tracking and managing assets assigned to employees.
                <br />
                <strong>Tech Stack:</strong> Angular, JavaScript, MS SQL Server.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Angular</li>
                <li>JavaScript</li>
                <li>MS SQL Server</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* Smart Trivandrum App */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div className="body">
              <h3>Smart Trivandrum</h3>
              <p>
                Developed a smart city app enabling users to pay property and water taxes, search for nearby hotels, banks, hospitals, and more.
                <br />
                <strong>Tech Stack:</strong> React, PostgreSQL.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>PostgreSQL</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
    </div>
  );
}
