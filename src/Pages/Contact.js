import React from "react";
import "./Contact.css";
import contactIllustration from "../Assets/letter.png";
import githubIcon from "../Assets/github.svg";
import instagramIcon from "../Assets/instagram.svg";
import linkedinIcon from "../Assets/linkedin.svg";
import whatsappIcon from "../Assets/whatsapp.svg";
import telegramIcon from "../Assets/telegram.svg";

export const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-text-content">
          <h2 className="contact-heading">Contact Me</h2>
          <p className="contact-paragraph">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions. Feel free to reach out if
            you have any inquiries or just want to say hi!
          </p>
          <p className="contact-paragraph">
            Whether you have a question or just want to connect, my inbox is
            always open. I'll do my best to get back to you promptly and look
            forward to hearing from you.
          </p>
          <div className="contact-buttons">
            <a
              href="https://github.com/bswlganesh"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button"
            >
              <img src={githubIcon} alt="GitHub" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/baswalganesh1/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button"
            >
              <img src={linkedinIcon} alt="LinkedIn" /> LinkedIn
            </a>
            <a
              href="https://instagram.com/bswlganesh"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button"
            >
              <img src={instagramIcon} alt="Instagram" /> Instagram
            </a>
            <a
              href="https://wa.me/qr/7WEJGQ7SJXSBK1"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button"
            >
              <img src={whatsappIcon} alt="WhatsApp" /> WhatsApp
            </a>
            <a href="https://t.me/bswlganesh" target="_blank" rel="noopener noreferrer" className="contact-button">
              <img src={telegramIcon} alt="Telegram" /> Telegram
            </a>
          </div>
        </div>
        <div className="contact-illustration-container">
          <img src={contactIllustration} alt="Contact Illustration" className="contact-illustration" />
        </div>
      </div>
    </section>
  );
};