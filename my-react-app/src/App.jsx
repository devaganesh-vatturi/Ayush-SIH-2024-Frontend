import { useState } from 'react'
import './App.css'
import Translate from './components/Translate.jsx';
import Login from "./components/Login.jsx";

function App() {
    return (
        <div>
          <Login/>
          <Translate />
        </div>
    );
}

export default App;
