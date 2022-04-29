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
            <div className="carousel-caption d-none d-md-block">
              <h2>Welcome to GamersZone</h2>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img4} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h2>Find Latest Games you are looking for</h2>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img5} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
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
      <div className="container text-center" >
        <div className="card mb-3 mt-3 text-white" style={{ backgroundColor: "black" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src="https://images.unsplash.com/photo-1575419268007-a9a5e6b1ce0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8 text-white my-5">
              <div className="card-body ">
                <h5 className="card-title">Find Newest Released Games</h5>
                <p className="card-text" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis officiis illo accusantium, ducimus facere placeat? Consectetur magni, est cum dolorem quis exercitationem modi necessitatibus tempore nostrum fugit accusantium culpa aut excepturi ipsam sit labore voluptatibus aspernatur animi minus qui soluta numquam, quos nam adipisci. Recusandae ad nihil illum laborum laboriosam! Expedita, porro voluptate tempora molestiae incidunt error, maxime, repellendus accusamus soluta tempore perferendis. Vero ex ipsam, quod perferendis veniam laudantium dolor voluptatum soluta ea placeat ab maiores aperiam nesciunt blanditiis, quisquam facilis aliquid reiciendis laborum similique fugit numquam ullam fugiat. Corrupti sequi modi voluptates consequuntur, cumque deserunt tempora magni earum?</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3 text-white" style={{ backgroundColor: "black" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src="https://images.unsplash.com/photo-1567027757540-7b572280fa22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8 text-white my-5">
              <div className="card-body ">
                <h5 className="card-title">Rate your Favourite Games</h5>
                <p className="card-text" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis officiis illo accusantium, ducimus facere placeat? Consectetur magni, est cum dolorem quis exercitationem modi necessitatibus tempore nostrum fugit accusantium culpa aut excepturi ipsam sit labore voluptatibus aspernatur animi minus qui soluta numquam, quos nam adipisci. Recusandae ad nihil illum laborum laboriosam! Expedita, porro voluptate tempora molestiae incidunt error, maxime, repellendus accusamus soluta tempore perferendis. Vero ex ipsam, quod perferendis veniam laudantium dolor voluptatum soluta ea placeat ab maiores aperiam nesciunt blanditiis, quisquam facilis aliquid reiciendis laborum similique fugit numquam ullam fugiat. Corrupti sequi modi voluptates consequuntur, cumque deserunt tempora magni earum?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-light text-center text-lg-start">
        <div className="text-center text-light p-3" style={{backgroundColor:"#212529"}}>
          © 2022 Copyright:
          <a className="text-light" style={{textDecoration:"none"}} href="/"> GamersZone.com</a>
        </div>
      </footer>
    </>
  )
}
