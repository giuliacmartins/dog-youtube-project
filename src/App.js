import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Video from './pages/video/Video'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/video/:categoryId/:videoId' element={<Video/>} />  
      </Routes>
    </div>
  )
}

export default App 