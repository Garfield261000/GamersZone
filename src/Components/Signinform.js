import React from 'react'

export default function Signinform() {
  return (
    <>
    <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content" style={{height: "40em",width:"40em" }}>
          <form className='my-5' >
            <h3 className='text-center text-light fw-bold'>Login</h3>
            <div className="mb-3 mx-5 my-5 text-light fw-bold" >
              <label>Username</label>
              <input
                type="email"
                className="form-control my-2"
                placeholder="Type your username"
                />
            </div>
            <div className="mb-3 mx-5 my-5 text-light fw-bold">
              <label>Password</label>
              <input
                type="password"
                className="form-control my-2"
                placeholder="Type your password"
                />
            </div>
            <p className="forgot-password text-end mx-5" >
              <a href="/" className="text-light" style={{ textDecoration: 'none' }}> Forgot password?</a>
            </p>
            <div className="d-grid justify-content-center">
              <button type="submit" className="btn btn-danger rounded-pill my-4" style={{ width: "20em" }} >
                Login
              </button>
            </div>
            <div className="d-grid justify-content-center my-5 text-light ">
                <span >Or Sign Up Using</span>
                <a href="/" className='text-center text-danger' style={{ textDecoration: 'none' }}>SIGN UP</a>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

