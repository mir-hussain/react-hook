import React, { useState } from "react";

const useInput = () => {
  const getInput = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    console.log(inputName);
    console.log(inputValue);
  };

  const handleInvalid = (event) => {
    event.preventDefault();
    console.log("Fuck you");
  };
  return { getInput, handleInvalid };
};

export default useInput;
