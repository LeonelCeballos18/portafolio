import React from "react";
import './aboutme.css';

export default function ImgProfile(props){
    return(
        <div>
            <img className="img absolute -translate-y-6 translate-x-6 mx-auto" src={props.src} alt="Image profile" />
            <div className="img box absolute mx-auto"></div>
        </div>
    );
}