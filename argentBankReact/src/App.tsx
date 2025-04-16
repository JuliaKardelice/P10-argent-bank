import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "./pages/home/Home"
import { Footer } from "../src/common/footer/Footer"
import { SignIn } from "./pages/signIn/SignIn";
import { Profile } from "./pages/profile/Profile";



export const App:React.FC = ()=> {

  return (
    <>
     <Router>
    <Routes>
    <Route path = "/" element = {<Home/>} /> 
    <Route path = "/signIn" element = {<SignIn/>} />
    <Route path = "/profile" element = {<Profile/>}/>
    </Routes>
    <Footer/>
    </Router>
    </>
  )
}


