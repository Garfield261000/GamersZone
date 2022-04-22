import React from 'react'

export default function Gamecard(props) {
    return (
        <div className='my-2'>
            <div className="card bg-dark bg-opacity-75 border-light" >
                <img src={props.Image} className="card-img-top px-2 py-2 rounded " alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center text-light fs-3">{props.Gamename}</h5>
                    <p className="card-text text-center text-light fs-4">Rating: {props.Rating}</p>
                    <p className="card-text text-light fs-5">Genres: {props.Genre}</p>

                </div>
            </div>
        </div>
    )
}
