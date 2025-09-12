import React from "react";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <main>
        <Header />
        <Home />
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;