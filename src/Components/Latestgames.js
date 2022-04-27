import React from 'react'
import Gamecard from './Gamecard'
import './Components.css'
import {v4 as uuidV4} from 'uuid'


export default function Latestgames({data}) {
  return (
    <div className="contain" >
      {data.map((Game) => {
        return(
          <div key={uuidV4()}>
            <Gamecard Gamename={Game.Gamename} Rating={Game.Rating} Image={Game.Image} Genre={Game.Genre} />
          </div>
        )
      })}
    </div>
  )
}