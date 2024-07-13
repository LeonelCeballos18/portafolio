import React, { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import Header from "./components/Header";
import "./index.css";
import AboutMe from "./components/AboutMe";
import TabButton from "./components/TabButton";
import imgProfile from "./assets/me.jpg";
import Card from "./components/Card";
import { projects } from "./data.js";
import Skills from "./components/Skills.jsx";
import linkedin from "./assets/Linkedin.svg";
import gmailLogo from "./assets/GmailLight.svg";

export default function App() {
  const [type, setType] = useState("web");

  function handleSelect(selectedButton) {
    setType(selectedButton);
  }

  useEffect(() => {
    ScrollReveal().reveal('.reveal', {
      distance: '50px',
      duration: 1000,
      easing: 'ease-in-out',
      origin: 'bottom',

    });
  }, []);

  return (
    <div>
      <Header />
      <br />
      <br />
      <div id="about-me">
        <AboutMe src={imgProfile} />
      </div>
      <h1 className="pt-20 text-center font-bold reveal" id="portafolio">PORTAFOLIO</h1>
      <menu className="flex justify-center reveal">
        <TabButton onSelect={() => handleSelect("web")}>Web</TabButton>
        <TabButton onSelect={() => handleSelect("desktop")}>Desktop</TabButton>
      </menu>
      <div className="min-h-screen text-white">
        <div className="container mx-auto py-10">
          <div className="grid gap-10 reveal">
            {projects[type].map((project, index) => (
              <Card
                key={index}
                title={project.title}
                description={project.description}
                details={project.details}
                imgSrc={project.imgSrc}
                url={project.url}
                reverse={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </div>
      <h1 className="pt-20 text-center font-bold reveal">SKILLS</h1>
      <div className=" py-10 reveal" id="skills">
        <Skills />
      </div>
      <h1 className="pt-20 text-center font-bold reveal" id="contact">CONTACT ME</h1>
      <div className="rounded-lg flex justify-center py-10 pt-5 reveal">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex items-center reveal">
            <a
              href="https://www.linkedin.com/in/leonel-ceballos-34597128a/"
              target="_blank"
              className="flex items-center"
            >
              <img src={linkedin} alt="Linkedin" className="h-8 w-8 mr-2" />
              <p>Leonel Ceballos</p>
            </a>
          </div>
          <div className="flex items-center reveal">
            <img src={gmailLogo} alt="gmail" className="h-8 w-8 mr-2" />
            <p>leonelalejandroceballos@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
