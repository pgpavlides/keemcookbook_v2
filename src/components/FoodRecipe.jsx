import React from "react";
import { useState, useEffect, useRef } from "react";

export function test() {
   console.log(handleChange); 
}

const FoodRecipe = (props) => {
  
 const data = props.data

  function makekilo() {
    return Math.round(((props.in / 100) * props.inputValue) * 10) / 10 
  }


  const handleChange = (event) => {
    props.setInputValue(event.target.value)
    
  }
  
  
 

  return (
    <>
      <div className=" grid grid-cols-6 gap-4 bg-grey-500 ">
        {/* <a href="/recipes" className="animate-zoomin col-start-1 col-end-2 rounded-lg text-center pt-4 bg-red-500" > */}
        <a
          href="/recipes"
          className="animate-zoomin col-start-1 col-end-3 text-center text-4xl  bg-blue-500 hover:bg-blue-700 text-white font-bold py-5 rounded-full xl:col-end-2"
        >
          <button className="">↩️</button>
        </a>

        <input
          // ref={inputRef}
          value={props.inputValue}
          onChange={handleChange}
          // onInput={(e) => setInput(e.target.value)}         
          // onInput={(e) => setInput(e.target.value)}         
          // onChange={onChange}        
          className="animate-zoomin font-bold text-xl xl:text-4xl col-start-4 col-end-6 text-center block w-full p-4
       text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-red-500
        focus:border-blue-500 dark:bg-white-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black
         dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="number"
        />
        <div className="animate-zoomin pt-3 xl:pt-5 text-3xl xl:text-4xl  rounded-xl col-start-6 col-end-7 text-center leading-relaxed bg-red-300  ">
        🧑‍🤝‍🧑
        </div>

        <div className="animate-zoomin font-bold pt-10 xl:pt-3 text-sm rounded-xl bg-orange-500 col-start-1 col-end-3 text-center">
          {props.name}
          <img
            className=" w-96 animate-zoomin rounded-3xl px-2 py-2 mx-auto"
            src={props.img}
            alt=""
          />
        </div>
        <div className="animate-zoomin font-bold rounded-xl bg-red-500 col-start-3 col-end-8 text-center text-2xl">
          Ingridients
          <div className="text-left pl-4 font-normal pt-3 pb-2 xl:pt-16 xl:text-center text-sm xl:text-2xl">
            {
              data.map(item => 
                <li key={item.key} >{item.name} {item.in && (((item.in / 100) * props.inputValue) * 10) / 10} {item.end}</li>
              )
            }
           
          </div>
        </div>
        <div className=" font-bold animate-zoomin rounded-xl bg-green-500 col-start-8 col-end-1 text-center text-2xl">
          Execution
          <p className="font-normal pt-3 xl:pt-6 text-sm xl:text-2xl">
            {props.description}
          </p>
        </div>
        <div className="font-bold animate-zoomin rounded-xl bg-violet-500 col-start-8 col-end-1 text-center text-2xl">
          Extra Information
          <p className="font-normal pt-3 xl:pt-6 text-sm xl:text-2xl">
            {props.extrainfo}
          </p>
        </div>
      </div>
    </>
  );
};

export default FoodRecipe;
