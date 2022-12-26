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
import RecipePage3 from "./components/RecipePage3";
import RecipePage4 from "./components/RecipePage4";




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
        <Route path="/recipespage3" element={<RecipePage3/>} />
        <Route path="/recipespage4" element={<RecipePage4/>} />
        
      </Routes>
    </>
  );
}

export default App;
