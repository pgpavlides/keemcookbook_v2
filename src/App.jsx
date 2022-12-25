import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Recipes from "./components/Recipes";
import Navbar from "./components/Navbar";

import FoodRecipe from "./recipes/FoodRecipe";


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
