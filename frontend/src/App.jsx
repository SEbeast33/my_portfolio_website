import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Servicei from './components/Servicei'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { useState } from 'react'
import { useEffect } from 'react'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './app.css'
import { img } from './assets/Assets'
import Loder from './components/Loder'

const App = () => {

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate an API call or any other time-consuming task
    setTimeout(() => {
      setIsLoading(false); // Turn off the loading state
    }, 3500); // Simulate a 2-second loading delay
  }, []);

  return(

    <>
     {isLoading? (<Loder/>):
     <>
      <Header/>
      <Hero/>
      <Servicei/>
      <Projects/>
      <Skills/>
    </>
    }
     
    </>
 
  )
  
}



export default App