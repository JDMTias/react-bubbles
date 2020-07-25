import React, { useState } from "react";
import axios from 'axios';

const userCred = {
  username:'Lambda School',
  password:'i<3Lambd4'
}

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [credentials, setCredentials]=useState(userCred)

  const handleChange = (e) => {
     setCredentials({...credentials, [e.target.name]: e.target.value})
  }

  const getCredentials = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', userCred)
    .then(res => {
      console.log(res)
      console.log(res.data.payload)
      localStorage.setItem('token', res.data.payload)
      window.location.assign("/colors")
    })
    .catch(err => console.log(err))
  }

  return (
          <div>
              <form onSubmit={getCredentials}>
                  <label className='srOnly'>Username:</label>
                 <input
                 type='text'
                 name='username'
                value='Lambda School'
                 onChange={handleChange}
                 />
                  <label className='srOnly'>Password:</label>
                 <input
                 type='text'
                 name='password'
                value='i<3Lambd4'
                 onChange={handleChange}
                 />
                 <button>Log in!</button>
              </form>
          </div>
  );
};

export default Login;
