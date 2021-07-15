import React from "react";
import useInput from "../hooks/useInput";

const Login = () => {
  const { getInput, handleInvalid } = useInput();

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>Email: </label>
          <input
            onBlur={getInput}
            onInvalid={handleInvalid}
            type='email'
            name='email'
            id='email'
            required
          />
        </div>
        <div>
          <label htmlFor='password'>Password: </label>
          <input
            type='password'
            name='password'
            id='password'
            onInvalid={handleInvalid}
            required
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Login;
