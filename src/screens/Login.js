import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import {Link, useNavigate} from 'react-router-dom'
import img1 from '../images/food1.png'

// let currname="";


export default function Login() {

  


  const [credentials, setcredentials] = useState({ email: "", password: "" })
  // console.log(credentials.name);

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({ email: credentials.email, password: credentials.password })

    })

    const json = await response.json();
    console.log(json);

    if (!json.success) {
      if(json.email)
      {
        alert("Invalid password")

      }
      else
      {
        alert("Invalid email! Sign-up on the website!")
        navigate("/signup")
      }
    }
    else  
    {
      console.log("User logged in successfully!")
      localStorage.setItem("authToken", json.authToken);
      console.log(localStorage.getItem("authToken"));
      global.name = json.name;
      navigate("/");
    }
  }

  const onChange = (event) => {
    setcredentials(
      {
        ...credentials,
        [event.target.name]: event.target.value
      }
    )
  }
  return (

    <div className='bg-image' style={{backgroundImage: `url(https://images.pexels.com/photos/616401/pexels-photo-616401.jpeg?cs=srgb&dl=pexels-lukas-616401.jpg&fm=jpg)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize:'cover',
    height:'100vh' }}>

      <Navbar />
      <div mt-5>h</div>
      <div className='container pt-5'>
        <form className='mt-5 w-50 mx-auto pb-2 ps-2 pe-2 rounded' onSubmit={handleSubmit} style={{backgroundImage:"linear-gradient(to right, #fed2c7,#fed1c7 )" }}>
          <fieldset className="border p-2 border-dark rounded">
            <legend className="float-none w-auto p-2">Sign-in</legend>

            <h4 className='form-group ms-3'>Welcome Back</h4>

            <div className="form-group m-3">
              <label htmlFor="email">Email address</label>
              <small id="emailHelp" className="form-text text-muted ms-2">(We'll never share your email with anyone else)</small>
              <input type="email" className="form-control" placeholder="Enter email" name='email' value={credentials.email} onChange={onChange} />

            </div>

            <div className="form-group m-3">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" placeholder="Password" name='password' value={credentials.password} onChange={onChange} />
            </div>

            <button type="submit" className="btn btn-success m-3">Login</button>
            <Link to="/signup" className="btn btn-danger m-3">Create account</Link>
          </fieldset>
        </form>

      </div>

    </div>
  )
}

// export currname;
