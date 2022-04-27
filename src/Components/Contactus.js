import React from 'react'


export default function Contactus() {
  return (
    <div className='container text-white my-5'>
      <form>
        <div className="form-outline mb-4 ">
          <input type="text" id="form4Example1" className="form-control fs-5 p-3" placeholder='Enter Name' />
          <label className="form-label fs-4" for="form4Example1">Name</label>
        </div>
        <div className="form-outline mb-4">
          <input type="email" id="form4Example2" className="form-control fs-5 p-3" placeholder='Enter Email' />
          <label className="form-label fs-4" for="form4Example2">Email address</label>
        </div>
        <div className="form-outline mb-4">
          <textarea className="form-control fs-5 p-3" id="form4Example3" rows="4" placeholder='Send us your queries'></textarea>
          <label className="form-label fs-4" for="form4Example3">Message</label>
        </div>
        <div className='text-center'>
          <button type="submit" className="btn btn-primary btn-block mb-4 fs-3" style={{ width: "100px" }}>Send</button>
        </div>
      </form>
    </div>
  )
}
