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
      updateUserInput("name", "");
      updateErrorManually(
        "name",
        "Name can't have numbers in it"
      );
    } else {
      setError({});
      if (username.length < 4) {
        updateUserInput("name", "");
        updateErrorManually(
          "name",
          "Name can't be less than 4 character"
        );
      } else {
        setError({});
        updateUserInput("name", username);
      }
    }
  };

  const emailValidation = (email) => {
    if (email.length === 0) {
      updateUserInput("email", "");
      updateErrorManually("email", "email can't be empty");
    } else {
      if (!email.includes("@") || !email.includes(".com")) {
        updateUserInput("email", "");
        updateErrorManually("email", "Invalid email");
      } else {
        setError({});
        updateUserInput("email", email);
      }
    }
  };

  const passwordValidation = (password) => {
    if (password.length < 8) {
      updateUserInput("password", "");
      updateErrorManually(
        "password",
        "Password must be 8 character or longer."
      );
    } else {
      setError({});
      updateUserInput("password", password);
    }
  };

  const getInput = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    // updateErrorByEvent(event, false);

    if (inputName === "name") {
      nameValidation(inputValue);
    } else if (inputName === "email") {
      emailValidation(inputValue);
    } else if (inputName === "password") {
      passwordValidation(inputValue);
    }
  };

  return { getInput, handleInvalid, error, userInput };
};

export default useInput;
