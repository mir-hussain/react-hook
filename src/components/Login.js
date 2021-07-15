import React from "react";
import useInput from "../hooks/useInput";

const Login = () => {
  const { getInput, handleInvalid, error } = useInput();

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
          {error?.email && <p>Email is required</p>}
        </div>
        <div>
          <label htmlFor='password'>Password: </label>
          <input
            onBlur={getInput}
            type='password'
            name='password'
            id='password'
            onInvalid={handleInvalid}
            required
          />
          {error?.password && <p>Password is required</p>}
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Login;
