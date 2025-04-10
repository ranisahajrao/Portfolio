import { BrowserRouter } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import { NavHashLink } from "react-router-hash-link";
import Illustration from "../assets/illustration.svg";
import linkedin from "../assets/linkedin.svg";
import githubIcon from "../assets/github.svg";
import whatsapp from "../assets/whatsapp.svg";
import Hello from "../assets/Hello.gif";
import telegram from "../assets/telegram.svg";

import "./Hero.css";

export function Hero() {
  return (
    <section className="hero-container" id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>
            Hello <img src={Hello} alt="Hello" width="20px" />, I'm
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>Pradnya Sahajrao</h1>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>Software Engineer</h3>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">3 Years Experience</p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">
              Contact
            </NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/pradnya-sahajrao-725989184/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="Linkedin" />
            </a>
            <a
              href="https://github.com/ranisahajrao"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=+918262939843&text=Hello+Pradnya,+I+found+your+contact+through+your+portfolio+site.%0A%0A"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsapp} alt="Whatsapp" />
            </a>
          </div>
        </ScrollAnimation>
      </div>

      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={Illustration} alt="Illustration" />
        </ScrollAnimation>
      </div>
    </section>
  );
}
