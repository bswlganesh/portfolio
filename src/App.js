import React from "react";
import { Header, Footer, BackToTopButton } from "./components";
import { Home, About, Projects } from "./Pages";

import "./App.css";

export default function App() {
  return (
    <div className="app-wrapper">
      <main>
        <Header />
        <Home />
        <About />
        <Projects />
      </main>
      <BackToTopButton />
      <Footer />
    </div>
  );
}
