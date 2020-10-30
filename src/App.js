import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import RecipeDetails from "./pages/RecipeDetails/RecipeDetails";
import Swiper from "./pages/Swiper/Swiper";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app d-flex">
        <div className="sidebar d-flex flex-column float-left">
          <Switch>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>

        <div className="main float-left d-flex flex-column justify-content-center align-items-center">
          <Switch>
            <Route path="/profile/RecipeDetails">
              <RecipeDetails />
            </Route>
            <Route path="/">
              <Swiper />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
