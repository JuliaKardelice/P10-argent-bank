

import React from 'react';
import "./Account.scss"

// Définition de l'interface d'un compte
interface AccountData {
  id: number;
  title: string;
  amount: string;
  description: string;
}


// Déclaration des props attendues par le composant
interface AccountProps {
  account: AccountData; // Le composant reçoit un tableau de comptes
}



const Account: React.FC<AccountProps> = ({ account }) => {
  return (
    <>

        <div key={account.id} className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">{account.title}</h3>
            <p className="account-amount">{account.amount}</p>
            <p className="account-amount-description">{account.description}</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </div>
      
    </>
  );
};
export default Account;