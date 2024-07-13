import React from "react";
import './tabbutton.css'

export default function tabButton({children, onSelect}){
    return(
        <li><button className="button" onClick={onSelect}>{children}</button></li>
    );
}