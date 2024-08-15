import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Section01 from './components/Section01'
import NEW_BORN from './components/pages/NEW_BORN_COMP/NEW_BORN'
import Section2 from './components/events/App'

function App() {
  return (
    <>
      <div className='App'>
        <Navbar></Navbar>
        <Section01></Section01>
        <Section2></Section2>
      </div>
    </>
  )
}

export default App
