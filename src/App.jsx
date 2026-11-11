import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Nav from './Componet/Nav'
import AppRoute from './Componet/AppRoute'
import { createContext } from 'react'
export const context = createContext()
function App() {
  const [count, setCount] = useState(0)
  const [store,setStore] = useState([])
  // const [show,setShow] = useState([])
  // function controll(){
  //   const getting = JSON.parse(localStorage.getItem('storing'))
  //   console.log(getting, 'getting value')
  //   setShow(getting)
  // }
  // useEffect(function(){
  //   localStorage.setItem('storing',JSON.stringify(store))
  // },[store])
  
  return (
    <>
      <context.Provider value={{store,setStore,}}>
        <Nav></Nav>
        <AppRoute></AppRoute>
      </context.Provider>
    </>
  )
}

export default App
