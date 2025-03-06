import argentBankLogo  from "../../assets/img/argentBankLogo.png";
import React from "react"
import { NavLink } from "react-router-dom";


export const Header :React.FC = () => {

return(

<Header>
<img src= {argentBankLogo} alt="logo de argent bank"></img>
<NavLink>
Sign-in
</NavLink>
<NavLink>
Sign-out
</NavLink>

</Header>


)
}



