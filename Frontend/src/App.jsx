import './index.css'
import { Route, Routes } from "react-router-dom";
import Add from "./components/Add";
import Navbar from "./components/Navbar";
import Start from './components/Start';
import Vote from './components/Vote';
import "@fontsource/praise";
import Get from './components/Get'
import GetById from './components/GetById';
import Insider from './components/Insider';



function App() {

  return (

    <div className="App">

    <Navbar />
    <Routes>
    <Route path="/" element={<Insider />} />
    <Route path="/Host" element={<Start />} />
      <Route path="/Add" element={<Add />} />
      <Route path="/Vote" element={<Vote />} />
      <Route path="/Lobby" element={<Get />} />
      <Route path="/Getbyid/:username" element={<GetById />} />
    </Routes>
  </div>
 
  );
}

export default App;
