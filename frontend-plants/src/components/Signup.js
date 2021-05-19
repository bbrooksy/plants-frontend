import React, { useState, useEffect } from "react";
import axios from 'axios'
import { axiosWithAuth } from "../helpers/axiosWithAuth";

const initialFormValues = {
  username: '',
  number: '',
  password: '',
}

const Login = (props) => {
  const [formValues, setFormValues]= useState(initialFormValues)
  const [error, setError] = useState('')
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const handleChange = (e) => {
    setFormValues({...formValues,
      [e.target.name]: e.target.value
    })
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
    .post('/api/register', formValues)
    .then(res => {
      console.log('res:', res)
      //res.data.payload gives us token
      localStorage.setItem('token', res.data.payload)
    //   props.history.push('/protected/bubbles')
    })
    .catch(err =>{
      console.log({'err:': err.response.data})
      handleErrors()
    });
  }

  const handleErrors = () => {
    if (
      formValues.username !== "eve.holt@reqres.in" ||
      formValues.password !== "pistol"
    )
    setError("Username or Password not valid")
  }

  return (
    <div>
      <h1>Sign up for Water Your Plants App</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Build Signup form here</h2>
      </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor='username'>Username</label>
          <input data-testid="username" type='text' name='username' value={formValues.username} onChange={handleChange} id='username' placeholder='Username..' />
          <label htmlFor='password'>Password</label>
          <input data-testid="password" type='password' name='password' value={formValues.password} onChange={handleChange} id='password' placeholder='Password..' />
          <button>Sign up!</button>
        </form>


      <p data-testid="errorMessage" className="error" >{error}</p>
    </div>
  );
};

export default Login;