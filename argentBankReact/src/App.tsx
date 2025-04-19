import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "./pages/home/Home"
import { Footer } from "../src/common/footer/Footer"
import { SignIn } from "./pages/signIn/SignIn";
import { Profile } from "./pages/profile/Profile";
import { ProtectedRoute } from "./components/protectedRoutes/ProtectedRoute";



export const App:React.FC = ()=> {

  return (
    <>
     <Router>
    <Routes>
    <Route path = "/" element = {<Home/>} /> 
    <Route path = "/signIn" element = {<SignIn/>} />
    <Route element = { <ProtectedRoute/> }> 
    <Route path = "/profile" element = {<Profile/>}/>
    </Route>
    </Routes>
    <Footer/>
    </Router>
    </>
  )
}


