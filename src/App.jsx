import { useState } from "react";
import "./App.css";

import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Recipes from "./components/Recipes";
import Navbar from "./components/Navbar";
import Questions from "./components/Questions";

import FoodRecipe from "./components/FoodRecipe";

import RecipePage from "./components/RecipePage";
import RecipePage2 from "./components/RecipePage2"; 



function App() {
  return (
    <>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/recipespage" element={<RecipePage/>} />
        <Route path="/recipespage2" element={<RecipePage2/>} />
      </Routes>
    </>
  );
}

export default App;
