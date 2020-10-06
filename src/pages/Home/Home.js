import React, { useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Badge from "react-bootstrap/Badge";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";

import "./Home.css";

const Home = () => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const ingreRef = useRef();

  const search = () => {
    const newSelectedIng = ingreRef.current.value;
    setSelectedIngredients([...selectedIngredients, newSelectedIng]);
  };

  return (
    <>
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
              <Form.Control
                type="text"
                placeholder="Search Here ..."
                ref={ingreRef}
              />
              <InputGroup.Prepend onClick={search}>
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
    </>
  );
};

export default Home;
