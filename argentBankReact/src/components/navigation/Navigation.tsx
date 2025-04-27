import { useMemo, useState } from "react";
import logo from "../../assets/img/argentBankLogo.png";
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { logout } from '../../reducers/auth/authSlice';
import "./Navigation.scss"


const Navigation: React.FC = () => {
const dispatch : AppDispatch = useDispatch(); /// App dispatch propre à ts
  // authentication status and user profile from the Redux store
const { isAuthenticated, infoUser} =useSelector((state: RootState) => state.auth); 

const [userName, setUserName] = useState('');
  // We handle the logout action by dispatching the logout function


const handleLogout = () => {

  dispatch(logout());

  };


  // Effect to update the userName when the user profile is updated
 useMemo(() => {
      if (isAuthenticated) {
          setUserName(infoUser?.userName || '');
      }
  }, [isAuthenticated, infoUser?.userName]);


  return (
    <header className="main-nav">
      <NavLink to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div style={{display: 'flex'}}>
        {isAuthenticated ? (
          <>
          <NavLink className="main-nav-item" to="/profile">
          <i className="fa fa-user-circle"></i>
            {userName}
          </NavLink>
        <NavLink to="/" className="main-nav-item" onClick={handleLogout}>
          <i className="fa fa-sign-out"></i>
          Sign Out
        </NavLink>
        </>
        ) : (
          <NavLink to="/signIn" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            <p>Sign In</p>
          </NavLink>
        )}
      </div>
    </header>
  );
};
export default Navigation;