import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from "./components/Login.jsx";
import Doctorsignup from './components/Doctorsignup.jsx';
import Home from './components/Home.jsx';
import StartupSignup from './components/StartupSingup.jsx';
import Farmersignup from './components/Farmersignup.jsx';
import Startupdashboard from './components/Startupdashboard.jsx';
import NewStartUpDashboard from './components/NewStartUpDashboard.jsx';
import Hometwo from './components/Hometwo.jsx';
function App() {
    return (
     <>
    <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/hometwo' element={<Hometwo/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signupstartup' element={<StartupSignup/>}/>
    <Route path='/signupdoctor' element={<Doctorsignup/>}/>
    <Route path='/signupfarmer' element={<Farmersignup/>}/>
    <Route path='/signup' element={<NewStartUpDashboard/>}/>
   </Routes>
   </BrowserRouter> 
</>
    );
}

export default App;