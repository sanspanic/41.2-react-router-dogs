import React from "react";
import { useParams } from "react-router-dom";
import DogDetails from "./DogDetails";

const FilterDogDetails = ({ dogs, showBackLink }) => {
  const { doggo } = useParams();
  console.log("name param is: ", doggo);

  if (doggo) {
    const currentDog = dogs.filter(
      (dog) => dog.name.toLowerCase() === doggo.toLowerCase()
    )[0];

    console.log(currentDog);

    return (
      <DogDetails
        src={currentDog.src}
        name={currentDog.name}
        age={currentDog.age}
        facts={currentDog.facts}
        showBackLink={showBackLink}
      />
    );
  }
  return null;
};

export default FilterDogDetails;
