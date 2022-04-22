import React from 'react'
import Gamecard from './Gamecard'
import './Gameinfo.css'

export default function Gameinfo(props) {
  
  return (
    <div className="contain">
      {props.filtereddata.map((elem) => {
        return(
          <Gamecard Gamename={elem.Gamename} Rating={elem.Rating} Image={elem.Image} Genre={elem.Genre} />
        )
      })}
    </div>
  )
}
