import React from "react";
import "./Footer.css";
import githubIcon from "../Assets/github.svg";
import instagramIcon from "../Assets/instagram.svg";
import linkedinIcon from "../Assets/linkedin.svg";
import whatsappIcon from "../Assets/whatsapp.svg";
import telegramIcon from "../Assets/telegram.svg";
import resumeFile from "../Assets/resume.pdf";

export const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-left">
          <a
            href="https://github.com/bswlganesh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img src={githubIcon} alt="GitHub" className="social-icon" />
          </a>
          <a
            href="https://instagram.com/bswlganesh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img src={instagramIcon} alt="Instagram" className="social-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/baswalganesh1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://wa.me/qr/7WEJGQ7SJXSBK1" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <img src={whatsappIcon} alt="WhatsApp" className="social-icon" />
          </a>
          <a href="https://t.me/bswlganesh" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
            <img src={telegramIcon} alt="Telegram" className="social-icon" />
          </a>
        </div>
        <div className="footer-center">
          <p>bswlganesh copyright 2247</p>
        </div>
        <div className="footer-right">
          <a
            href={resumeFile}
            download="BaswalGanesh_Resume.pdf"
            className="resume-button"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
};