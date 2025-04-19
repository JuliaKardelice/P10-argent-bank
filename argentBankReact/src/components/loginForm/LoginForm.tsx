import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  } from '../../reducers/auth/authSlice'; // action
import { useNavigate } from 'react-router-dom'; // pour la redirection
import { AppDispatch } from '../../store/store';
import { loginUser } from '../../reducers/auth/authAction';
import { selectError, selectIsAuthentificated, selectLoading } from '../../reducers/auth/authSelector';


const LoginForm : React.FC = () => {
 
const dispatch:AppDispatch = useDispatch();

const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const [rememberMe, setRememberMe] = useState(false)

// We retrieve the loading, error and authentication state from the store
const error = useSelector(selectError);
const loading = useSelector(selectLoading);
const isAuthenticated = useSelector(selectIsAuthentificated);


const handleSubmit = (e:React.FormEvent) => {

e.preventDefault();
dispatch(loginUser({email,password,rememberMe}))


}

useEffect(()=>{

if (isAuthenticated) {
navigate('/profile');
}
}, [isAuthenticated,navigate]);

  return (

<section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>  
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
            checked= {rememberMe}
           onChange={() => setRememberMe(!rememberMe) } // inverse la valeur du rememberMe de false à true
          />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button" type="submit">
        {loading ? 'Loading' : 'SignIn'}
        </button>     
        {error && <p style={{color:"red"}}>{error}</p>}
      </form>
    

    </section>
  )

};

export default LoginForm;
