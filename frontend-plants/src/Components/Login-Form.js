import React, { useState, useEffect } from 'react';



    export default function LoginForm() {
        const initialValues = {user_name: "", password: ""}
        const [logincreds, setLoginCreds] = useState(initialValues)
        const handleLoginChange = e => {
          setLoginCreds({
            ...logincreds,
            [e.target.name]: e.target.value
            }
          )} 
          const handleSubmit = e => {
            ///insert redux dispatch
           }

return (
    <div className="login">
      <form className='form' onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label>
          Username:
            <input 
              name='user_name'
              type='text'
              autoFocus
              value={logincreds.user_name}
              onChange={handleLoginChange}
              required/>
        </label>
          <br/>
        <label>
          Password:
            <input
              name='password'
              type='password'
              value={logincreds.password}
              onChange={handleLoginChange}
              required/>
        </label>
              <br/>
            <button>Submit</button>
        </form>
      </div>
    )
  }
  