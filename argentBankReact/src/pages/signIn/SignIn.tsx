import React from 'react';
import "./signIn.scss"
import Navigation from '../../components/navigation/Navigation';
import LoginForm from '../../components/loginForm/LoginForm';



export const SignIn: React.FC = () => {
 
return(
<div className='signIn-container'>
<Navigation/>
<main className='signIn-content'>
<LoginForm/>
</main>

</div>


)
}

