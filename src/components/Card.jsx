import React from "react";
import "./card.css";

export default function Card(props) {
  return (
    <div
      className={`p-5 rounded-lg flex flex-col md:flex-row ${
        props.reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="md:w-1/2 items-center content-center">
        <h2 className="font-semibold text-xl mb-2">{props.title}</h2>
        <h3 className="text-white font-semibold text-lg mb-2">
          {props.description}
        </h3>
        <p className="text-white mb-4">{props.details}</p>
      </div>
      <div className="md:w-1/2 p-3">
        <a href={props.url} target="_blank" rel="noopener noreferrer">
          <img
            src={props.imgSrc}
            alt={`${props.title}`}
            className="rounded-lg"
          />
        </a>
      </div>
    </div>
  );
}
