import React from "react";
import "./About.css";
import Profile from "../assets/Profile.jpeg";
import python from "../assets/python.svg";
import java from "../assets/java.svg";
import wordpress from "../assets/wordpress.svg";
import shopify from "../assets/shopify.svg";
import htmlIcon from "../assets/html-icon.svg";
import cssIcon from "../assets/css-icon.svg";
import jsIcon from "../assets/js-icon.svg";
import reactIcon from "../assets/react-icon.svg";
import typescriptIcon from "../assets/typescript-icon.svg";
import vueIcon from "../assets/vue-icon.svg";
import boostrapIcon from "../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export default function About() {
  return (
    <section className="about-container" id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={100}>
          <p>
            Hi there! I'm Vinayak, an enthusiastic Software Engineer skilled in web development, machine learning, and scalable software solutions
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={200}>
          <p>
            I build responsive web applications, fine-tune ML models, and implement robust backend services.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={300}>
          <p>
            I also work with CMS platforms like WordPress and Shopify to streamline content management.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <div className="education">
            <h3>Education:</h3>
            <h4>Bachelor of Engineering in IT</h4>
            <p>Genba Moze College of ENgineering,Balewadi</p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={550}>
          <div className="experience">
            <h3>Experience:</h3>
            <h4>Software Developer</h4>
            <p>GoKloud Software Solutions| July 2024 - Present</p>
            <p>Pune, India</p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          {[ jsIcon, reactIcon, typescriptIcon, htmlIcon, cssIcon, boostrapIcon].map((icon, index) => (
            <div className="hability" key={index}>
              <ScrollAnimation animateIn="fadeInUp" delay={100 + index * 10}>
                <img src={icon} alt="skill" />
              </ScrollAnimation>
            </div>
          ))}
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={210}>
          <img src={Profile} alt="Pradnya Sahajrao" />
        </ScrollAnimation>
      </div>
    </section>
  );
}
