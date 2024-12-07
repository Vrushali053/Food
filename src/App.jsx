import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Booktable from './Pages/Booktable';
import Header from './Components/Header';
import Footer from './Components/Footer';

export const App = () => {
  return (
    <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
    <Route path='/Home' element={<Home />}/>
    <Route path='/Menu' element={<Menu />}/> 
    <Route path='/About' element={<About />}/>
    <Route path='/Contact' element={<Contact />}/>
    <Route path='/Booktable' element={<Booktable />}/>    
    </Routes>
    <Footer />
  </Router>
  )
}
