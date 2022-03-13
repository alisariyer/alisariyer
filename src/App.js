import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Menu from "./components/Menu";

export default function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <>
      {isMenuOpen && <Menu />}
      <Header />
      <main>
        <Hero />
        <Projects />
      </main>
      <footer className="light">
        <div className="container">
         <small>Made by Ali Sariyer | March 2022</small>
        </div>
      </footer>
    </>
  );
}
