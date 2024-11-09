import React from "react";
import Hero from "../Hero/page";
import About from "../About/page";
import Services from "../Services/page";
import Project from "../Project/page";
import Skills from "../Skills/page";
import Contact from "../Contact/page";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Services />
      <Project />
      <Skills />
      <Contact />
    </div>
  );
};
export default Home;
