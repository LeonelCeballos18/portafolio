import React from "react";
import './aboutme.css';
import ImgProfile from "./ImgProfile";

export default function AboutMe(props){
    return(
        <div className="container mx-auto grid grid-cols-3 gap-4 py-20">
            <div className="col-span-3 min-[1200px]:col-span-1 relative max-[1200px]:pb-20">
                <ImgProfile src={props.src}/>
            </div>
            <div className="col-span-3 min-[1200px]:col-span-2 mt-24 min-[1200px]:mt-0 max-[1200px]:pt-20">
                <h1 className="font-bold min-[1200px]:text-left">Hi, I'm Leonel <span className="text-custom-green">Ceballos</span></h1>
                <p className="pt-3 font-light  min-[1200px]:text-left">Back-end developer, aspiring to be a full stack developer</p>
                <p className="pt-3 min-[1200px]:text-left">I love working on mobile, web, and desktop applications. I'm excited about creating innovative and efficient solutions. I'm a seventh-semester software engineering student with a passion for backend development and a goal to become a full-stack developer.</p>
                <a className="pt-3 min-[1200px]:text-left">See my resume</a>
            </div>
        </div>
    );
}