import React from "react";
import "./Footer.css";
import githubIcon from "../Assets/github.svg";
import instagramIcon from "../Assets/instagram.svg";
import linkedinIcon from "../Assets/linkedin.svg";
import whatsappIcon from "../Assets/whatsapp.svg";
import telegramIcon from "../Assets/telegram.svg";
import resumeFile from "../Assets/resume.pdf";

const socialLinks = [
  {
    href: "https://github.com/bswlganesh",
    label: "GitHub",
    icon: githubIcon,
  },
  {
    href: "https://instagram.com/bswlganesh",
    label: "Instagram",
    icon: instagramIcon,
  },
  {
    href: "https://www.linkedin.com/in/baswalganesh1/",
    label: "LinkedIn",
    icon: linkedinIcon,
  },
  {
    href: "https://wa.me/qr/7WEJGQ7SJXSBK1",
    label: "WhatsApp",
    icon: whatsappIcon,
  },
  {
    href: "https://t.me/bswlganesh",
    label: "Telegram",
    icon: telegramIcon,
  },
];

export const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-left">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
              <img src={link.icon} alt={link.label} className="social-icon" />
            </a>
          ))}
        </div>
        <div className="footer-center">
        <p>Copyright © {new Date().getFullYear()} bswlganesh. All Rights Reserved.</p>
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