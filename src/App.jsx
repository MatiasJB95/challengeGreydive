import React from "react";
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Home from "./components/Home";
import Cliente from "./components/Cliente"




function App() {

   return (
   
    <BrowserRouter>
      <Routes>
      <Route path="/challengeGreydive" element={<Home />}></Route>
       <Route path="/cliente/:cliente" element={<Cliente />} />
  
      </Routes>

</BrowserRouter>


   )
  }
  

export default App