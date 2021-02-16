import React from "react";
import DogDetails from "./DogDetails";

const DogList = ({ dogs }) => {
  return (
    <>
      <div>
        {dogs.map((dog) => (
          <DogDetails
            key={dog.name}
            name={dog.name}
            age={dog.age}
            src={dog.src}
            facts={dog.facts}
          />
        ))}
      </div>
    </>
  );
};

export default DogList;
