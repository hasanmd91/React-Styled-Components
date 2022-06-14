import React from "react";

const Image = (imgsrc, text, width) => {
  return <img src={imgsrc} alt={text} width={width}></img>;
};

export default Image;
