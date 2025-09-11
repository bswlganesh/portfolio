import React from "react";
import "./Home.css";
import profile from "../Assets/profile.png";
import githubIcon from "../Assets/github.svg";
import instagramIcon from "../Assets/instagram.svg";
import linkedinIcon from "../Assets/linkedin.svg";
import whatsappIcon from "../Assets/whatsapp.svg";
import telegramIcon from "../Assets/telegram.svg";



export const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="image-content">
          <img src={profile} alt="Baswal Ganesh" className="profile-image" />
        </div>
        <div className="text-content">
          <div className="text-content-inner">
            <h2>Front-end Engineer</h2>
            <p>
         
              Baswal Ganesh is a freelance front-end engineer based in Delhi-Ind. <br/>
              He builds nice things for good people.
            </p>
            <div className="social-icons">
              <a href="https://github.com/bswlganesh" target="_blank" rel="noopener noreferrer">
                <span className="visually-hidden">View my GitHub profile</span>
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a href="https://instagram.com/bswlganesh" target="_blank" rel="noopener noreferrer">
                <span className="visually-hidden">Follow me on Instagram</span>
                <img src={instagramIcon} alt="Instagram" />
              </a>
              <a
                href="https://www.linkedin.com/in/baswalganesh1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="visually-hidden">Connect with me on LinkedIn</span>
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
              <a href="https://wa.me/qr/7WEJGQ7SJXSBK1" target="_blank" rel="noopener noreferrer">
                <span className="visually-hidden">Contact me on WhatsApp</span>
                <img src={whatsappIcon} alt="WhatsApp" />
              </a>
              <a href="https://t.me/bswlganesh" target="_blank" rel="noopener noreferrer">
                <span className="visually-hidden">Contact me on Telegram</span>
                <img src={telegramIcon} alt="Telegram" />
              </a>
              
            </div>
            <a href="#contact" className="work-with-me-btn">
              Work with me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};