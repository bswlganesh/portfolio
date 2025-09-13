import React from "react";
import { Header, Footer, BackToTopButton } from "./components";
import { Home, About, Projects, Skills, Contact } from "./Pages";

import "./App.css";

export default function App() {
  return (
    <>
      <main>
        <Header />
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <BackToTopButton />
      <Footer />
    </>
  );
}
