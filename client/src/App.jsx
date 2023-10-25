import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './Pages/About/About'
import Home from './Pages/Home/Home'
import Room from './Pages/Room/Room'
import Event from './Pages/Event/Event'
import Gallery from './Pages/Gallery/Galley'
import Contact from './Pages/Contact/Contact'

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/rooms' element={<Room />} />
        <Route path='/events' element={<Event/>} />
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </>
  )
}

export default App
