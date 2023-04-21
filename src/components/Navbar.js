import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../index.css'


// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import "../../node_modules/bootstrap/dist/js/bootstrap.min.js"




export default function Navbar() {

  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate('/')
  }


  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-success" style={{backgroundImage:"linear-gradient(to right, black,black )"}}>


        <Link className="navbar-brand fs-2 ms-4" to="/" style={{fontFamily:'Nabla'}}>Food Lab</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse me-auto" id="navbarNavAltMarkup">

          {
            (localStorage.getItem("authToken"))
              ? <div className="navbar-nav">
                <div className="btn text-dark me-4 rounded-1 bg-white fs-6 border ">Hello, {global.name}. Let's order!</div>
              </div>
              : <div className="navbar-nav">
                <div className="btn text-dark me-4 rounded-1 bg-white fs-6 border ">Hey there! Welcome to SD</div>
              </div>
          }
        </div>

        {
          (!localStorage.getItem("authToken"))
            ?
            <div className='d-inline navbar-nav'>
              <Link className="btn bg-white text-success me-4 rounded-1" to="/login">Login</Link>
              <Link className="btn bg-warning text-dark me-5 rounded-1" to="/signup">Signup</Link>
            </div>
            :
            <div className='d-inline navbar-nav'>

              <div className="btn bg-white text-success me-3 rounded-1">Cart</div>
              <div className="btn bg-white text-danger me-4 rounded-1" onClick={handleLogout} >Log-out</div>
            </div>
        }

      </nav>
  )
}
