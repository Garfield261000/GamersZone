import React,{ useState } from 'react';
import './App.css';
import './Components/Card.css'
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import { Games } from './Components/Games';


function App() {
  const [filtereddata,setfiltereddata]=useState(Games)

  const handlefilter = (event) => {
    const searchtxt=event.target.value
    const newfilter= Games.filter((value)=> {
        return value.Gamename.toLowerCase().includes(searchtxt.toLowerCase());
    });
   
    if(searchtxt===""){
      setfiltereddata(Games)
    }
    else{
      setfiltereddata(newfilter);
    }
  }
  return (
    <>
      <Navbar />
      <div className="search">
          <input className="searchbox" type="text" placeholder=" Search Game..." onChange={handlefilter} />
      </div>
      <div className="contain">
        {filtereddata.map((val, key) => {
          return (
            <Card Image={filtereddata[key].Image} Gamename={filtereddata[key].Gamename} Rating={filtereddata[key].Rating} />
          );
        })};
      </div>

    </>
  );
}

export default App;
