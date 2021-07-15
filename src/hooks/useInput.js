import React, { useState } from "react";

const useInput = () => {
  const [error, setError] = useState({});
  const [name, setName] = useState("");
  const [value, setValue] = useState("");

  const getInput = (event) => {
    updateError(event, false);
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setName(inputName);
    setValue(inputValue);
  };

  const handleInvalid = (event) => {
    event.preventDefault();
    updateError(event, true);
  };

  const updateError = (event, status) => {
    const currentError = { ...error };
    currentError[event.target.name] = status;
    setError(currentError);
  };
  return { getInput, handleInvalid, error };
};

export default useInput;
