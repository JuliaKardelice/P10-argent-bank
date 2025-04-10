import React from "react";

import Texts from "../../components/texts/Texts";
import Navigation from "../../components/navigation/Navigation";


export const Home:React.FC = () => {


  return(
    <>
    <Navigation/>
    <main>
      
    <div className="hero">
      <section className="hero-content">
        <h2 className="sr-only">Promoted Content</h2>
        <p className="subtitle">No fees.</p>
        <p className="subtitle">No minimum deposit.</p>
        <p className="subtitle">High interest rates.</p>
        <p className="text">Open a savings account with Argent Bank today!</p>
      </section>
    </div>
    <section className="features">
    <Texts/>
     </section>
  </main>
</>
)




}