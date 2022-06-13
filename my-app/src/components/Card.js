import React from "react";

import nerdimage from "../assets/Images/illustration.png";

const Card = () => {
  return (
    <div>
      <div>
        <h1> React styled components</h1>
        <p>
          Styled Components is a library that, through a set of practices,
          solves complex CSS problems.
        </p>
        <button> watch now</button>
        <button> Github Repo</button>
      </div>
      <div>
        <img src={nerdimage} alt="nothing" />
      </div>
    </div>
  );
};

export default Card;
