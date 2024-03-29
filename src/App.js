import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Menu from "./components/Menu";

export default function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  }

  return (
    <>
      <div id="top"></div>
      <Menu isMenuOpen={isMenuOpen}/>
      <Header handleMenu={handleMenu} isMenuOpen={isMenuOpen} className="bg-gray"/>
      <main>
        <Hero />
        <Projects />
      </main>
      <footer className="light">
        <div className="container">
         <small>Built by Ali Sariyer | March 2022</small>
        </div>
      </footer>
    </>
  );
}
