import React from 'react'
import img3 from '../img3.jpg'
import img4 from '../img4.jpg'
import img5 from '../img5.jpg'


export default function Home() {
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner rounded">
          <div className="carousel-item active">
            <img src={img3} className="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h2>Welcome to GamersZone</h2>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img4} className="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h2>Find Latest Games you are looking for</h2>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img5} className="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h2>The best place for Gamers to hang out</h2>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}
