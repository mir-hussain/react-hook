import React from "react";
import useInput from "../hooks/useInput";

const Login = () => {
  const { getInput, handleInvalid, error } = useInput();
  console.log(error);

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name: </label>
          <input
            type='text'
            name='name'
            id='name'
            onInput={getInput}
            onInvalid={handleInvalid}
            required
          />
          {error?.email && <p>{error?.name}</p>}
        </div>
        <div>
          <label htmlFor='email'>Email: </label>
          <input
            type='email'
            name='email'
            id='email'
            onInput={getInput}
            onInvalid={handleInvalid}
            required
          />
          {error?.email && <p>{error?.email}</p>}
        </div>
        <div>
          <label htmlFor='password'>Password: </label>
          <input
            type='password'
            name='password'
            id='password'
            onInput={getInput}
            onInvalid={handleInvalid}
            required
          />
          {error?.password && <p>{error?.password}</p>}
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Login;
