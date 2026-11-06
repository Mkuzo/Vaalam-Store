import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Nav from './Componet/Nav'
import AppRoute from './Componet/AppRoute'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav></Nav>
    <AppRoute></AppRoute>
    </>
  )
}

export default App
