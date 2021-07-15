import React, { useState } from "react";

const useInput = () => {
  const [error, setError] = useState({});
  const [userInput, setUserInput] = useState({});
  console.log(userInput);

  const updateError = (event, status) => {
    const currentError = { ...error };
    currentError[event.target.name] = status;
    setError(currentError);
  };

  const updateUserInput = (name, value) => {
    const currentUserInput = { ...userInput };
    currentUserInput[name] = value;
    setUserInput(currentUserInput);
  };

  const getInput = (event) => {
    updateError(event, false);
    const inputName = event.target.name;
    const inputValue = event.target.value;
    updateUserInput(inputName, inputValue);
  };

  const handleInvalid = (event) => {
    event.preventDefault();
    updateError(
      event,
      `${event.target.name} can't be empty`
    );
  };

  return { getInput, handleInvalid, error };
};

export default useInput;
