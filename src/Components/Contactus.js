import React from 'react'


export default function Contactus() {
  return (
    <div className='container ' style={{backgroundColor:"#223139"}}>
      <section class="mb-4 text-white fs-4 my-5">
        <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
        <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
          a matter of hours to help you.</p>
        <div class="row ">
          <div class="col-md-9 mb-md-0 mb-5 my-2">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">
              <div class="row">
                <div class="col-md-6 my-2">
                  <div class="md-form mb-0 ">
                    <input type="text" id="name" name="name" class="form-control"/>
                      <label for="name" class="my-2">Your name</label>
                  </div>
                </div>
                <div class="col-md-6 my-2">
                  <div class="md-form mb-0">
                    <input type="text" id="email" name="email" class="form-control"/>
                      <label for="email" class="my-2">Your email</label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="md-form mb-0">
                    <input type="text" id="subject" name="subject" class="form-control"/>
                      <label for="subject" class="my-2">Subject</label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="md-form">
                    <textarea type="text" id="message" name="message" rows="6" class="form-control my-2 md-textarea"></textarea>
                    <label for="message">Your message</label>
                  </div>
                </div>
              </div>
            </form>
            <div class="status"></div>
          </div>
          <div class="col-md-3 text-center my-2">
            <ul class="list-unstyled mb-0">
              <li><i class="fas fa-map-marker-alt fa-2x"></i>
                <p>Bhopal,462021 MP, INDIA</p>
              </li>
              <li><i class="fas fa-phone mt-4 fa-2x"></i>
                <p>+ 01 234 567 89</p>
              </li>
              <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                <p>contact@GamersZone.com</p>
              </li>
            </ul>
          </div>
          <div class="text-center my-2 " style={{width:"100%"}}>
              <a class="btn btn-primary fs-4" style={{width:"20%"}} onclick="document.getElementById('contact-form').submit();">Send</a>
            </div>
        </div>
      </section>
    </div>
  )
}
