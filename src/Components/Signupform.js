import React from 'react'

export default function Signupform() {
  return (
    <>
    <div className="modal fade " id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content" style={{height: "40em",width:"40em" }}>
          <form className='my-5' >
            <h3 className='text-center text-light fw-bold'>Signup</h3>
            <div className="mb-3 mx-5 my-5 text-light fw-bold" >
              <label>Username</label>
              <input
                type="email"
                className="form-control my-2"
                placeholder="Type username"
                />
            </div>
            <div className="mb-3 mx-5 my-5 text-light fw-bold" >
              <label>Email</label>
              <input
                type="email"
                className="form-control my-2"
                placeholder="Type email"
                />
            </div>
            <div className="mb-3 mx-5 my-5 text-light fw-bold">
              <label>Password</label>
              <input
                type="password"
                className="form-control my-2"
                placeholder="Set your password"
                />
            </div>
            <div className="d-grid justify-content-center">
              <button type="submit" className="btn btn-danger rounded-pill my-4" style={{ width: "20em" }} >
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}
