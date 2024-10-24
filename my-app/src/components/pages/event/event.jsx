import React from 'react'
import Header from './components/Header'
import "bootstrap/dist/css/bootstrap.min.css"
import Tickets from './components/Tickets'
import Footer from './components/Footer'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Book from './components/Book'

const Event=() =>{
  
  
  return (
    
    <>
    <Header/>
    
    
    <Tickets/>
    
    <Footer/>
    </>
  )
}
export default Event
