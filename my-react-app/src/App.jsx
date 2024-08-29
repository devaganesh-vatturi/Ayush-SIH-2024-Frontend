import { useState } from 'react'
import './App.css'
import Translate from './components/Translate.jsx';
import Farmersignup from "./Farmersignup";
import Doctorsignup from "./Doctorsignup.jsx";
import Login from "./login.jsx";

function App() {
    return (
        <div>
          <Login/>
          <Translate />
        </div>
    );
}

export default App;
