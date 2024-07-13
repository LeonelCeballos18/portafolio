import React, { useEffect, useRef, useState } from "react";
import ScrollReveal from "scrollreveal";
import './header.css';
import menuLogo from "../assets/MenuLogo.svg";
import closeMenuLogo from "../assets/CloseMenuLogo.svg";

export default function Header() {
    const [status, setStatus] = useState(false);
    const navRef = useRef(null);

    function toggleMenu() {
        setStatus(prevStatus => !prevStatus);
    }

    useEffect(() => {
        ScrollReveal().reveal('.reveal', {
            distance: '50px',
            duration: 1000,
            easing: 'ease-in-out',
            origin: 'bottom'
        });

        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setStatus(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div ref={navRef}>
            <div className="header mx-auto px-4 fixed w-full max-[1200px]:hidden">
                <ul className="flex justify-end gap-x-7 p-4 m-4">
                    <li className="reveal"><a href="#about-me">About me</a></li>
                    <li className="reveal"><a href="#portafolio">Portfolio</a></li>
                    <li className="reveal"><a href="#skills">Skills</a></li>
                    <li className="reveal"><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <button className="btnMenu fixed top-0 right-0 m-4 z-10 min-[1200px]:hidden" onClick={toggleMenu}>
                <img src={status ? closeMenuLogo : menuLogo} alt="Menu Toggle" width={50} height={50} />
            </button>
            <div className={`headerMin min-[1200px]:hidden fixed right-0 top-0 transition-transform duration-300 ${status ? 'transform-none' : 'transform translate-x-full'}`}>
                <div className="flex flex-col items-end space-y-5 px-5 pt-5">
                    <ul className="flex flex-col items-end space-y-5">
                        <li className="reveal"><a href="#about-me" onClick={toggleMenu}>About me</a></li>
                        <li className="reveal"><a href="#portafolio" onClick={toggleMenu}>Portfolio</a></li>
                        <li className="reveal"><a href="#skills" onClick={toggleMenu}>Skills</a></li>
                        <li className="reveal"><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
