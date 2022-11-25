import React,{useEffect, useState, Fragment} from "react";
import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Cliente from "./components/Cliente"




function App() {

   return (
   
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />}></Route>
       <Route path="/cliente/:cliente" element={<Cliente />} />
  
      </Routes>

</BrowserRouter>


   )
  }
  

export default App