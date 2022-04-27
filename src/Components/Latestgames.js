import React from 'react'
import Gamecard from './Gamecard'
import './Components.css'

export default function Latestgames({data}) {
  return (
    <div className="contain" >
      {data.map((Game) => {
        return(
          <Gamecard Gamename={Game.Gamename} Rating={Game.Rating} Image={Game.Image} Genre={Game.Genre} />
        )
      })}
    </div>
  )
}