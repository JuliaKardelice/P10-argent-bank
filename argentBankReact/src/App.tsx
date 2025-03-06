import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from "./layout/Header"
import { Home } from "./pages/home/Home"
import "./App.scss"
import { Footer } from "../src/common/footer/Footer"
import { SignIn } from "./pages/signIn/SignIn";


export const App:React.FC = ()=> {

  return (
    <>
     <Router>
    <Header/>
    <Routes>
    <Route path = "/home" element = {<Home/>} /> 
    <Route path = "/signIn" element = {<SignIn/>} />
    </Routes>
    <Footer/>
    </Router>
    </>
  )
}


