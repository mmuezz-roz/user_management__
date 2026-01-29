import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css'

import Navbar from './Component/navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Component/Home'
import Manage from './Component/Manage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/Managing' element={<Manage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
