import React from "react";
import Csharp from "../assets/SkillIconsCs.svg";
import Express from '../assets/SimpleIconsExpress.svg';
import Bootstrap from '../assets/SkillIconsBootstrap.svg';
import Cplus from '../assets/SkillIconsCpp.svg';
import Css from '../assets/SkillIconsCss.svg';
import Figma from '../assets/SkillIconsFigmaDark.svg';
import Html from '../assets/SkillIconsHtml.svg';
import Javascript from '../assets/SkillIconsJavascript.svg';
import Nodejs from '../assets/SkillIconsNodejsDark.svg';
import Postgresql from '../assets/SkillIconsPostgresqlLight.svg';
import ReactLogo from '../assets/SkillIconsReactDark.svg';
import Tailwind from '../assets/DeviconTailwindcss.svg';

export default function Skills() {
  return (
    <div className="rounded-lg flex justify-center pt-5">
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        <img src={Csharp} alt="C#" className="h-12 w-12" />
        <img src={Cplus} alt="C#" className="h-12 w-12" />
        <img src={Javascript} alt="C#" className="h-12 w-12" />
        <img src={Express} alt="C#" className="h-12 w-12" />
        <img src={Nodejs} alt="C#" className="h-12 w-12" />
        <img src={Bootstrap} alt="C#" className="h-12 w-12" />
        <img src={Tailwind} alt="C#" className="h-12 w-12" />
        <img src={Postgresql} alt="C#" className="h-12 w-12" />
        <img src={Html} alt="C#" className="h-12 w-12" />
        <img src={Css} alt="C#" className="h-12 w-12" />
        <img src={ReactLogo} alt="C#" className="h-12 w-12" />
        <img src={Figma} alt="C#" className="h-12 w-12" />
      </div>
    </div>
  );
}
