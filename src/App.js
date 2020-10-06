import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import RecipeDetails from "./pages/RecipeDetails/RecipeDetails";
import Swiper from "./pages/Swiper/Swiper";

function App() {
  return (
    <div className="app d-flex">
      <div className="sidebar d-flex flex-column float-left">
        {/* <Home /> */}
        <Profile />
      </div>
      <div className="main float-left">
        {/* <Swiper /> */}
        <RecipeDetails />
      </div>
    </div>
  );
}

export default App;
