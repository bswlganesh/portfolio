import { Slab } from "react-loading-indicators";
import "./App.css";
import React from "react";

export default function App() {
  return (
    <div className="container">
      <h1 className="title">bswlganesh</h1>
      <p className="subtitle">🚧 This website is under construction 🚧</p>

      <Slab color="#2c94e5" size="medium" />

      <p className="work-text">Check out my work:</p>

      <div className="links">
        <a href="https://filminfosis.netlify.app/" target="_blank" rel="noopener noreferrer">
          🎬 Filminfosis
        </a>
        <a href="https://bswl-todolist.netlify.app/" target="_blank" rel="noopener noreferrer">
          ✅ TODO App
        </a>
      </div>
    </div>
  );
}
