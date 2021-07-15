import { useState } from "react";

const useInput = () => {
  const [error, setError] = useState({});
  const [userInput, setUserInput] = useState({});
  console.log(userInput);

  const updateErrorByEvent = (event, status) => {
    setError((currentError) => ({
      ...currentError,
      [event.target.name]: status,
    }));
  };

  const updateErrorManually = (name, warningText) => {
    setError((currentError) => ({
      ...currentError,
      [name]: warningText,
    }));
  };

  const updateUserInput = (name, value) => {
    setUserInput((currentUserInput) => ({
      ...currentUserInput,
      [name]: value,
    }));
  };

  const handleInvalid = (event) => {
    event.preventDefault();
    updateErrorByEvent(
      event,
      `${event.target.name} can't be empty`
    );
  };

  const getInput = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    updateErrorByEvent(event, false);
    if (inputName === "name") {
      if (/([0-9])/.test(inputValue)) {
        setUserInput({});
        updateErrorManually(
          "name",
          "Name can't have numbers in it"
        );
      } else {
        updateErrorManually("name", false);
        if (inputValue.length < 4) {
          setUserInput({});
          updateErrorManually(
            "name",
            "Name can't be less than 4 character"
          );
        } else {
          updateUserInput(inputName, inputValue);
          updateErrorManually("name", false);
        }
      }
    }
  };

  return { getInput, handleInvalid, error };
};

export default useInput;
