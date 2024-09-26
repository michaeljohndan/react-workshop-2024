import React from 'react'
import './App.css'

import { Navbar } from './components/Navbar'
import { Landing } from './components/Landing'
import { ProjectList } from './components/ProjectList'

// import CssBaseline from '@mui/material/CssBaseline';



function App() {

  return (
    <>
      {/* <CssBaseline/> */}
      <Landing/>
      <Navbar />
      <ProjectList />
    </>
  )
}

export default App
