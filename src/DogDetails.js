import React from "react";
import { Link } from "react-router-dom";
import "./DogDetails.css";

const DogDetails = ({ name, age, src, facts, showBackLink }) => {
  return (
    <>
      <div className="DogDetails">
        <h4>{name}</h4>
        <img src={src}></img>
        <p>Age: {age}</p>
        <ul>
          {facts.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </div>

      {showBackLink ? (
        <div className="DogDetails-back">
          Go back to view <Link to="/dogs">ALL dogs</Link>
        </div>
      ) : null}
    </>
  );
};

export default DogDetails;
