import React from 'react'

export default function Card(props) {
    return (
        <div className="card" >
            <img src={props.Image} className="image" alt="" />
            <div className="text">
                <h4 className="Gamename">{props.Gamename}</h4>
                <p className="Rating">Rating : {props.Rating}</p>
            </div>
        </div>
    )
}
