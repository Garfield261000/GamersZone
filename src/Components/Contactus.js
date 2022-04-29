import React from 'react'


export default function Contactus() {
  return (
    <div className="container my-5 text-white" style={{backgroundColor:"#212529"}}>
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="wrapper">
            <div className="row no-gutters">
              <div className="col-md-6 d-flex align-items-stretch">
                <div className="contact-wrap w-100 p-md-5 p-4 py-5">
                  <h3 className="mb-4">Write us</h3>
                  <div id="form-message-warning" className="mb-4"></div>
                  <form method="POST" id="contactForm" name="contactForm" className="contactForm" novalidate="novalidate">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group my-2">
                          <input type="text" className="form-control" name="name" id="name" placeholder="Name"/>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group my-2">
                          <input type="email" className="form-control" name="email" id="email" placeholder="Email"/>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group my-2">
                          <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject"/>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group my-2">
                          <textarea name="message" className="form-control" id="message" cols="30" rows="6" placeholder="Message"></textarea>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input type="submit" value="Send Message" className="btn btn-primary"/>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-stretch">
                <div className="info-wrap w-100 p-md-5 p-4 py-5 img">
                  <h3>Contact information</h3>
                  <p className="mb-4">We're open for any suggestion or just to have a chat</p>
                  <div className="dbox w-100 d-flex align-items-start">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-map-marker"></span>
                    </div>
                    <div className="text pl-3">
                      <p><span>Address:</span> E-311 RP Hall IIT Kharagpur,West Bengal</p>
                    </div>
                  </div>
                  <div className="dbox w-100 d-flex align-items-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-phone"></span>
                    </div>
                    <div className="text pl-3">
                      <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
                    </div>
                  </div>
                  <div className="dbox w-100 d-flex align-items-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-paper-plane"></span>
                    </div>
                    <div className="text pl-3">
                      <p><span>Email:</span> <a href="mailto:info@yoursite.com">GamersZonequery@gmail.com</a></p>
                    </div>
                  </div>
                  <div className="dbox w-100 d-flex align-items-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-globe"></span>
                    </div>
                    <div className="text pl-3">
                      <p><span>Website</span> <a href="/">GamersZone.com</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
