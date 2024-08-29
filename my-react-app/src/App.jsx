import { useState } from 'react'
import './App.css'
import Translate from './components/Translate.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Translate />
    </>
  )
}

export default App
