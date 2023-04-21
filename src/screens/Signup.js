import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar';

export default function Signup() {

    let navigate = useNavigate();
    const [credentials, setcredentials] = useState({ name: "", email: "", password: "", location: "" })
    // console.log(credentials.name);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.location })

        })

        const json = await response.json();

        if (!json.success) {
            alert("Enter valid credentials")
        }

        

        alert("User login Successful! Login with fresh credentials")
        navigate("/")
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
        <div style={{backgroundImage: `url(https://wallpaper.dog/large/10756022.jpg)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize:'cover',
        height:'100vh' }}>
            
            <Navbar />

            <div className='container'>
                <form className='m-5 ms-auto w-50 pb-2 ps-2 pe-2 rounded' onSubmit={handleSubmit} style={{backgroundImage:"linear-gradient(to right, #fed1c7,#fed1c7 )" }}>
                    <fieldset className="border p-2 border-dark rounded">
                        <legend className="float-none w-auto p-2">Sign-up</legend>
                        <h4 className='form-group ms-3'>Welcome</h4>
                        <div className="form-group m-3">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" placeholder="Enter your name" name="name" value={credentials.name} onChange={onChange} />
                        </div>

                        <div className="form-group m-3">
                            <label htmlFor="email">Email address</label>
                            <small id="emailHelp" className="form-text text-muted ms-2">(We'll never share your email with anyone else)</small>
                            <input type="email" className="form-control" placeholder="Enter email" name='email' value={credentials.email} onChange={onChange} />
                            
                        </div>

                        <div className="form-group m-3">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" placeholder="Password" name='password' value={credentials.password} onChange={onChange} />
                        </div>

                        <div className="form-group m-3">
                            <label htmlFor="location">Location</label>
                            <input type="text" className="form-control" placeholder="Location" name='location' value={credentials.location} onChange={onChange} />
                        </div>
                        <button type="submit" className="btn btn-success m-3">Submit</button>
                        <Link to="/login" className="btn btn-danger m-3">Already a User</Link>
                    </fieldset>
                </form>

            </div>

        </div>
    );
};
