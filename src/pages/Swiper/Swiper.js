import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import TinderCard from "react-tinder-card";
import Fab from "@material-ui/core/Fab";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";

import recipesDB from "../../data/recipes";

import "./Swiper.css";

const Swiper = () => {
  const recipes = recipesDB;

  const onSwipe = (direction) => {
    switch (direction) {
      case "left":
        alert("You disliked this recipe");
        break;
      case "right":
        alert("You liked this recipe");
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="what-to-eat">What To Eat?</div>
      <div className="w-100 d-flex justify-content-center">
        <div className="d-flex flex-column">
          <div className="cardContainer">
            {recipes.map((recipe) => (
              <TinderCard className="swipe" onSwipe={onSwipe}>
                <div
                  className="swiper"
                  style={{
                    backgroundImage: `url('${recipe.image}')`,
                  }}
                >
                  <div className="recipe-info">
                    <h1>{recipe.title}</h1>
                    <p>{recipe.description}</p>
                  </div>
                </div>
              </TinderCard>
            ))}
          </div>
          <div className="d-flex justify-content-around px-5 mt-3">
            <Tooltip title="Like" aria-label="like">
              <Fab
                className="my-circle"
                color="secondary"
                aria-label="add an alarm"
              >
                <ThumbUpAltIcon />
              </Fab>
            </Tooltip>
            <Tooltip title="Save" aria-label="like">
              <Fab
                className="my-circle"
                color="secondary"
                aria-label="add an alarm"
              >
                <FavoriteIcon />
              </Fab>
            </Tooltip>
            <Tooltip title="Share" aria-label="like">
              <Fab
                className="my-circle"
                color="secondary"
                aria-label="add an alarm"
              >
                <ShareIcon />
              </Fab>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
};

export default Swiper;
