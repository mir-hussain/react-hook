import { useState } from "react";

const useInput = () => {
  const [error, setError] = useState({});
  const [userInput, setUserInput] = useState({});
  console.log(error);
  console.log(userInput);

  const updateErrorByEvent = (event, status) => {
    const currentError = { ...error };
    currentError[event.target.name] = status;
    setError(currentError);
  };

  const updateErrorManually = (name, warningText) => {
    const currentError = { ...error };
    currentError[name] = `${warningText}`;
    setError(currentError);
  };

  const updateUserInput = (name, value) => {
    const currentUserInput = { ...userInput };
    currentUserInput[name] = value;
    setUserInput(currentUserInput);
  };

  const getInput = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    updateUserInput(inputName, inputValue);
    // updateErrorByEvent(event, false);
  };

  const handleInvalid = (event) => {
    event.preventDefault();
    updateErrorByEvent(
      event,
      `${event.target.name} can't be empty`
    );
  };

  const checkName = (name) => {
    if (name <= 3) {
      updateErrorManually(
        "name",
        "Name can't be less than 3 character"
      );
    }
  };

  checkName(userInput?.name);

  return { getInput, handleInvalid, error };
};

export default useInput;
