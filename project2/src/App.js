import React from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter,Routes,Route}from"react-router-dom";
import './App.css';
import Aboutus from './Pages/Aboutus';
import Skills from './Pages/Skills';
import Hobbies from './Pages/Hobbies';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Navbar/>
      <Routes>
        <Route path = "Aboutus" element = {<Aboutus/>}/>
        <Route path = "Skills" element = {<Skills/>}/>
        <Route path = "Hobbies" element = {<Hobbies/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
