import React from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter,Routes,Route}from"react-router-dom";
import './App.css';
import Aboutus from './Pages/Aboutus';
import Experiance from './Pages/Experiance';
import Hobbies from './Pages/Hobbies';
import Education from './Pages/Education';
import Skills from './Pages/Skills';
function App() {
  return (

    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path = "Aboutus" element = {<Aboutus/>}/>
        <Route path = "Experiance" element = {<Experiance/>}/>
        <Route path = "Hobbies" element = {<Hobbies/>}/>
        <Route path = "Education" element = {<Education/>}/>
        <Route path = "Skills" element = {<Skills/>}/>
        
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
