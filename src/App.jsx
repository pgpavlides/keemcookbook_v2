import { useState } from "react";
import "./App.css";

import { Link, Route, Routes } from "react-router-dom";
import Home from "../src/components/Home";
import Recipes from "../src/components/Recipes";
import Navbar from "../src/components/Navbar";

import FoodRecipe from "../src/recipes/FoodRecipe";


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
