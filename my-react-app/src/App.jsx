import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Login from "./components/Login.jsx";
import Doctorsignup from './components/Doctorsignup.jsx';
import Home from './components/Home.jsx';
import Startupsignup from './components/Startupsignup.jsx';
import Farmersignup from './components/Farmersignup.jsx';
import Hometwo from './components/Hometwo.jsx';
import Startupdashboard from './components/Dashboard comps/Startupdashboard.jsx';
import Authoritydash from './components/Dashboard comps/Authoritydash.jsx';
import Doctordash from './components/Dashboard comps/Doctordash.jsx';
import Farmerdash from './components/Dashboard comps/Farmerdash.jsx';
import AiChatBot from './components/AiChatBot.jsx';
<<<<<<< HEAD
import DrugInspectorsignup from './components/DrugInspectorsignup.jsx'
=======
import Authoritysignup from './components/Authoritysignup.jsx'
>>>>>>> 7fe9fca4dc3ead47b36463e3d0daa3e33d186255

function App() {
    return (
     <>
    <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/hometwo' element={<Hometwo/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signupstartup' element={<Startupsignup/>}/>
<<<<<<< HEAD
    <Route path='/signupauthority' element={<DrugInspectorsignup/>}/>
=======
    <Route path='/signupauthority' element={<Authoritysignup/>}/>
>>>>>>> 7fe9fca4dc3ead47b36463e3d0daa3e33d186255
    <Route path='/signupdoctor' element={<Doctorsignup/>}/>
    <Route path='/signupfarmer' element={<Farmersignup/>}/>
    <Route path='/sdash' element={<Startupdashboard/>}/>
    <Route path='/ddash' element={<Authoritydash/>}/>
    <Route path='/docdash' element={<Doctordash/>}/>
    <Route path='/fardash' element={<Farmerdash/>}/>
    <Route path='/chatbot' element={<AiChatBot/>}/>
   </Routes>

   </BrowserRouter>  

</>
    );
}

export default App;