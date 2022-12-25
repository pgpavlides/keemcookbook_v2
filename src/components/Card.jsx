import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./Card.css"

function Scale (event) {
    event.target.classList.add('scale-0');
    event.target.classList.add('scale-100');
}

const Card = (props) => {

    
  return (
      <div 
      onLoad={Scale}
      className="animate-zoomin max-w-md bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
    //   className="transform transition-all duration-1000 ease-out scale-1 max-w-md bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
      >
        <a href={props.linkref}>
          <img
            className="block pt-2 mx-auto sm:mx-25 sm:shrink-0 object-cover rounded-full h-[100px] w-[100px]"
            // className="mx-auto h-36 pt-5"
            src={props.img}
            alt=""
          />
        </a>
        <div className="p-1">
          <a href={props.linkref}>
            <h5 className="pt-5 mb-2 text-1xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
              {props.foodname}
            </h5>
          </a>
        </div>
      </div>
  );
};

export default Card;
