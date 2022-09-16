import React from "react";
import "./App.css";
import {
 BrowserRouter as Router,
 Routes,
   Route }
  from 'react-router-dom';
import Home from './components/Home'
import About from "./components/About";
import List from "./components/List";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
   <>
    <Router>
      <Navbar/>
      
    <Routes>
      <Route exact path="/" element={<Home/>}/>

      <Route exact path="/About" element={<About/>}/>
      <Route exact path="/List" element={<List/>}/>
  
    </Routes>
     </Router>
        
        </>
  );
}

export default App;
