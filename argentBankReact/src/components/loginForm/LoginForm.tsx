

import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import {  } from '../../reducers/authSlice'; // action
// import { useNavigate } from 'react-router-dom'; // pour la redirection

const LoginForm : React.FC = () => {
 // const dispatch = useDispatch();
 // const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  return (

<section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form>  
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="email"
            id="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-remember">
          <input
            type="checkbox"
            id="remember-me"
            checked= {true}
          //  onChange={() => } // In case of rememberMe checked, we send inverted response of initial state
          />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button" type="submit">
        { 'Sign In'}
        </button>
        {<p style={{ color: 'red' }}>""</p>}
      </form>
    </section>
  )

};

export default LoginForm;
