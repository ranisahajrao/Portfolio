import Particles from "react-tsparticles";
import { Hero } from "./Hero";
import About from "./About";
import Contact from "./Contact";
import { Project } from "./Project";

import python from "../assets/python.svg";
import java from "../assets/java.svg";
import wordpress from "../assets/wordpress.svg";
import shopify from "../assets/shopify.svg";
import htmlIcon from "../assets/html-icon.svg";
import cssIcon from "../assets/css-icon.svg";
import sassIcon from "../assets/sass-icon.svg";
import jsIcon from "../assets/js-icon.svg";
import reactIcon from "../assets/react-icon.svg";
import typescriptIcon from "../assets/typescript-icon.svg";
import vueIcon from "../assets/vue-icon.svg";
import boostrapIcon from "../assets/bootstrap-icon.svg";

import "./Main.css";

export function Main() {
  return (
    <main className="main-container">
      <div className="particles-wrapper">
        <Particles
          id="tsparticles"
          options={{
            detectRetina: true,
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: { enable: true, mode: "push" },
                onHover: {
                  enable: true,
                  mode: "bubble",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 2,
                },
                push: { quantity: 2 },
                repulse: { distance: 200, duration: 0.4 },
              },
            },
            particles: {
              color: { value: "#ffffff" },
              move: {
                direction: "none",
                enable: true,
                outMode: "out",
                speed: 2,
              },
              number: {
                density: { enable: true, area: 800 },
                value: 15,
              },
              opacity: {
                animation: { enable: true, minimumValue: 0.2, speed: 1 },
                random: true,
                value: 1,
              },
              rotate: {
                animation: { enable: true, speed: 5 },
                direction: "random",
                random: true,
                value: 0,
              },
              shape: {
                type: "image",
                image: [
                  { src: boostrapIcon, width: 20, height: 20 },
                  { src: cssIcon, width: 20, height: 20 },
                  { src: wordpress, width: 20, height: 20 },
                  { src: shopify, width: 20, height: 20 },
                  { src: htmlIcon, width: 20, height: 20 },
                  { src: jsIcon, width: 20, height: 20 },
                  { src: python, width: 20, height: 20 },
                  { src: java, width: 20, height: 20 },
                  { src: reactIcon, width: 20, height: 20 },
                  { src: sassIcon, width: 20, height: 20 },
                  { src: typescriptIcon, width: 20, height: 20 },
                  { src: vueIcon, width: 20, height: 20 },
                ],
              },
              size: { random: false, value: 16 },
            },
          }}
        />
      </div>

      {/* Content */}
      <Hero />
      <About />
      <Project />
      <Contact />
    </main>
  );
}
