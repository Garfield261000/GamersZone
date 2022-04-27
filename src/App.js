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
  const [data,setdata]=useState(Games);

  return(
    <>
      <Router>
        <Navbar setdata={setdata}/>
        <Routes>
          <Route  path="/" element={<Home/>}></Route>
          <Route exact path="/latestgames" element={<Latestgames data={data}/>}></Route>
          <Route exact path="/contact" element={<Contactus />}></Route>
        </Routes>
        <Signinform/>
      </Router>
    </>
  );
}

export default App;

