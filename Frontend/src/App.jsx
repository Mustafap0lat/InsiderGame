import './index.css'
import { Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useEffect, useState } from "react";
import Add from "./components/Add";
import Navbar from "./components/Navbar";
import Start from './components/Start';
import Status from './components/Status';
import Vote from './components/Vote';
import "@fontsource/praise";
import Get from './components/Get'
import GetById from './components/GetById';




function App() {

  return (

    <div className="App">

    <Navbar />
    <Routes>
    <Route path="/" element={<Start />} />
      <Route path="/Add" element={<Add />} />
      <Route path="/Vote" element={<Vote />} />
      <Route path="/Get" element={<Get />} />
      <Route path="/Status" element={<Status />} />
      <Route path="/Getbyid/:username" element={<GetById />} />
    </Routes>
  </div>
 
  );
}

export default App;
