import React from "react";
import "./App.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Badge from "react-bootstrap/Badge";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Fab from "@material-ui/core/Fab";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import SearchIcon from "@material-ui/icons/Search";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import TinderCard from "react-tinder-card";

function App() {
  const selectedIngredients = ["beef", "tomato", "pasta la vita", "basil"];

  return (
    <div className="app d-flex">
      <div className="sidebar d-flex flex-column float-left">
        <div className="sidebar-header d-flex w-100 align-items-center justify-content-start">
          <Image
            className="avatar"
            src="https://www.iconfinder.com/data/icons/faces-general/100/male_old_flat-512.png"
            roundedCircle
          />
          <div className="username">Username</div>
        </div>
        <div className="sidebar-content d-flex align-items-center">
          <div className="filter w-100 py-5">
            <h3 className="text-center">Filter</h3>
            <Form.Group as={Col}>
              <Form.Label>Ingredients</Form.Label>
              <InputGroup>
                <Form.Control type="text" placeholder="Search Here ..." />
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    <SearchIcon />
                  </InputGroup.Text>
                </InputGroup.Prepend>
              </InputGroup>
            </Form.Group>
            <div className="w-100 mx-3">
              {selectedIngredients.map((ingredient, i) => (
                <Badge className="mr-2" key={i} pill variant="primary">
                  {ingredient}
                </Badge>
              ))}
            </div>
            <Form.Group className="mt-4" as={Col}>
              <Typography id="cooking-time-slider" gutterBottom>
                Cooking Time (Min)
              </Typography>
              <Slider
                className="mt-2"
                min={0}
                defaultValue={20}
                step={5}
                max={180}
                valueLabelDisplay="auto"
                aria-labelledby="cooking-time-slider"
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox" as={Col}>
              <Form.Label>Course</Form.Label>
              <Form.Check type="checkbox" label="Breakfast" />
              <Form.Check type="checkbox" label="Lunch" />
              <Form.Check type="checkbox" label="Dinner" />
            </Form.Group>
          </div>
        </div>
      </div>
      <div className="main float-left">
        <div className="what-to-eat">What To Eat?</div>
        <div className="w-100 d-flex justify-content-center">
          <div className="d-flex flex-column">
            <TinderCard className="swipe">
              <div
                className="swiper"
                style={{
                  backgroundImage:
                    "url('https://recipetineats.com/wp-content/uploads/2018/07/Spaghetti-Bolognese.jpg')",
                }}
              >
                <div className="recipe-info">
                  <h1>Recipe Name</h1>
                  <p>Description</p>
                </div>
              </div>
            </TinderCard>
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
      </div>
    </div>
  );
}

export default App;
