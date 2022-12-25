import { useState } from "react";
import "./App.css";

import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Recipes from "./components/Recipes";
import RecipePage from "./components/RecipePage";
import Navbar from "./components/Navbar";

import FoodRecipe from "./components/FoodRecipe";


function App() {
  return (
    <>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipespage" element={<RecipePage/>} />
      </Routes>
    </>
  );
}

export default App;
