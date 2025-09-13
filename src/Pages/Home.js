import React from "react";
import "./Home.css";
import illustration from "../Assets/casset.png";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="text-content">
          <div className="text-content-inner">
            <p className="pre-heading">Hey there, my name is</p>
            <h1 className="main-heading">Baswal Ganesh</h1>
            <h2 className="sub-heading">A Self Taught Front-end Engineer</h2>
            <p>
    
              He builds nice things for good people.
            </p>
          </div>
        </div>
        <div className="image-content">
          <img
            src={illustration}
            alt="Minimalist vector illustration of browser windows"
            className="illustration-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;