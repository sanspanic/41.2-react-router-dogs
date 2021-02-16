import React from "react";
import DogDetails from "./DogDetails";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = ({ dogs }) => {
  return (
    <nav className="Nav">
      {dogs.map((dog) => (
        <NavLink to={`/dogs/${dog.name}`}>{dog.name}</NavLink>
      ))}
    </nav>
  );
};

export default Nav;
