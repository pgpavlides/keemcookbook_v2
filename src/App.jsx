import { useState } from "react";
import "./App.css";

import { Link, Route, Routes } from "react-router-dom";
import Home from "../public/components/Home";
import Recipes from "../public/components/Recipes";
import Navbar from "../public/components/Navbar";

import FoodRecipe from "../public/recipes/FoodRecipe";


function App() {
  return (
    <>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/foodrecipe" element={<FoodRecipe/>} />
      </Routes>
    </>
  );
}

export default App;
