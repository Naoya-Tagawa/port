import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./components/WorksCard"
import Card3dprinter from "./components/contents/Card3dprinter"
import WorksCard from './components/WorksCard'
import { BsFillMoonStarsFill } from "react-icons/bs"
import {AnimatePresence} from "framer-motion"
import {motion} from "framer-motion"
import { useLocation } from 'react-router-dom'
import Home from './components/home'
function App() {
  const [count, setCount] = useState(0)
  const [darkMode,setDarkMode] = useState(false)
  const location = useLocation();
  return (
    
    <div classname="App">
      <AnimatePresence>
        <header>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element = {<Home/>} />



          </Routes>


        </header>





      </AnimatePresence>




    </div>
  );
}

export default App
