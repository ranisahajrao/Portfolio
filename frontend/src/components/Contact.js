import React from "react";
import "./Contact.css";
import emailIcon from "../assets/email-icon.svg";
import phoneIcon from "../assets/phone-icon.svg";
import { Form } from "./Form";

export default function Contact() {
  return (
    <section className="contact-container" id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project?</p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
          <a href="mailto:pradnyasahajrao8484@gmail.com">
            <img src={emailIcon} alt="Email" />
          </a>
          <a href="mailto:pradnyasahajrao8484@gmail.com">pradnyasahajrao8484@gmail.com</a>
        </div>
        <div>
          <a href="tel:+918262939843">
            <img src={phoneIcon} alt="Phone No" />
          </a>
          <a href="tel:+918262939843">(+91) 8262939843</a>
        </div>
      </div>
      <Form />
    </section>
  );
}
