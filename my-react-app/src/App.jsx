import { useState } from 'react'
import './App.css'
import Translate from './components/Translate.jsx';
import Login from "./components/Login.jsx";
import Doctorsignup from './components/Doctorsignup.jsx';
import Home from './components/Home.jsx';
function App() {
    return (
        <div>
         < Doctorsignup></Doctorsignup>
          <Login/>
          <Translate />
        </div>
    );
}

export default App;
