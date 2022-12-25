import React from "react";

const FoodRecipe = (props) => {
  return (
    <>
      <div className=" grid grid-cols-6 gap-4 bg-grey-500 ">
        {/* <a href="/recipes" className="animate-zoomin col-start-1 col-end-2 rounded-lg text-center pt-4 bg-red-500" > */}
        <a href="/recipes" className="animate-zoomin col-start-1 col-end-3 text-center text-4xl  bg-blue-500 hover:bg-blue-700 text-white font-bold py-5 rounded-full xl:col-end-2" >
          <button className="">
            ↩️
          </button>
        </a>

        <input
          className="animate-zoomin col-start-4 col-end-6 text-center block w-full p-4
       text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-red-500
        focus:border-blue-500 dark:bg-white-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black
         dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="number"
        />
        <div className="animate-zoomin rounded-xl col-start-6 col-end-7 text-center leading-relaxed text-sm bg-red-300 xl:text-2xl ">
          Input Amount
        </div>

        <div className="animate-zoomin rounded-xl bg-orange-500 col-start-1 col-end-3 text-center text-2xl">
          Name
          <img
            className="animate-zoomin rounded-3xl px-2 py-2"
            src="https://www.giorgostsoulis.com/media/k2/items/cache/68b62085e41e8f225811766f8d5eb2bb_L.jpg"
            alt=""
          />
        </div>
        <div className="animate-zoomin rounded-xl bg-red-500 col-start-3 col-end-8 text-center text-2xl">
          Ingridients
        </div>
        <div className="animate-zoomin rounded-xl bg-green-500 col-start-8 col-end-1 text-center text-2xl">
          Execution
        </div>
        <div className="animate-zoomin rounded-xl bg-violet-500 col-start-8 col-end-1 text-center text-2xl">
          Extra Information
        </div>
      </div>
    </>
  );
};

export default FoodRecipe;
