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

  const nameValidation = (username) => {
    if (/([0-9])/.test(username)) {
      setUserInput({});
      updateErrorManually(
        "name",
        "Name can't have numbers in it"
      );
    } else {
      updateErrorManually("name", false);
      if (username.length < 4) {
        setUserInput({});
        updateErrorManually(
          "name",
          "Name can't be less than 4 character"
        );
      } else {
        updateUserInput("name", username);
        updateErrorManually("name", false);
      }
    }
  };

  const emailValidation = (email) => {
    console.log(email);
  };

  const passwordValidation = (password) => {
    console.log(password);
  };

  const getInput = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    updateErrorByEvent(event, false);

    if (inputName === "name") {
      nameValidation(inputValue);
    } else if (inputName === "email") {
      emailValidation(inputValue);
    } else if (inputName === "password") {
      passwordValidation(inputValue);
    }
  };

  return { getInput, handleInvalid, error };
};

export default useInput;
