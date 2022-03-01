import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
      </main>
      <footer>2022</footer>
    </>
  );
}
