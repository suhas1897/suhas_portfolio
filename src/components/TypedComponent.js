import React from "react";
import { ReactTyped } from "react-typed";

const TypedComponent = () => {
  return (
    <ReactTyped
      strings={["Front End Developer", "App Developer"]}
      typeSpeed={130}
      loop
      backSpeed={30}
      cursorChar="|"
      showCursor={true}
    />
  );
};

export default TypedComponent;
