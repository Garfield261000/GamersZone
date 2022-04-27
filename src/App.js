import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Latestgames from './Components/Latestgames';
import Contactus from './Components/Contactus';
import Signinform from './Components/Signinform';
import { Games } from './Components/Games';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [showSearch,setshowSearch]=useState(false);
  const [data,setdata]=useState(Games);

  return(
    <>
      <Router>
        <Navbar showSearch={showSearch} setshowSearch={setshowSearch} setdata={setdata}/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/latestgames" element={<Latestgames data={data}/>}></Route>
          <Route path="/contact" element={<Contactus />}></Route>
          <Route path="/signup" element={<Signinform />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

