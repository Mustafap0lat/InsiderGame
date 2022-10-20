import './index.css'
import { Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useEffect, useState } from "react";
import Add from "./components/Add";
import Navbar from "./components/Navbar";
import Start from './components/Start';
import "@fontsource/praise";
import Get from './components/Get'




function App() {

  return (

    <div className="App">

    <Navbar />
    <Routes>
    <Route path="/" element={<Get />} />
      <Route path="/Add" element={<Add />} />
      <Route path="/Start" element={<Start />} />
    </Routes>
  </div>
 
  );
}

export default App;
