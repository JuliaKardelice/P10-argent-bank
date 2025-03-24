import React, { useState } from 'react';
import {faCircleUser, faSign} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { loginUser } from '../../reducers/auth/authAction'


export const SignIn:React.FC = ( ) => {

const [email, setEmail] = useState('');
const {password, setPassword} = useState('')

const handleUserConnection = ( email, password) => {

}


  
}



export const SignIn:React.FC = ()=> {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Empêche le rechargement de la page
    // Logique pour vérifier les credentials et se connecter
    console.log('Email:', email);
    console.log('Mot de passe:', password);

    // Ici tu peux ajouter la logique pour envoyer ces données vers ton back-end (vers MongoDB)
  };

return(
<main className="main bg-dark">
   <FontAwesomeIcon icon={faCircleUser} />
<section className="sign-in-content">

<form onSubmit={handleSubmit}>
<div className="input-wrapper">
<label></label>
<input
type="text"
value={email}
onChange={(e) => setEmail(e.target.value)}
required

/>

</div>
<div className="input-wrapper">
<label> Mot de Passe
</label>
 <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
</div>
<button type ="submit"> Se connecter </button>
</form>


</section>





</main>
        
        


 

)

}

