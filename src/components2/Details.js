import React from 'react'

export default function Details() {

    let name = "Akshay Gudi"
    let gender = "Male"
    let roll = "20071A6721"
    let branch = "CSE-DS"
    let percentage = 81.23;

  return (
    <div>
        <div className="container">
            <div className='mt-5 text-danger' ><h4>Please see through the Camera until your attendance is marked successfully.</h4></div>
        </div>
        <div className="container mx-auto mt-5 border border-5 rounded-5 pt-5 pb-5">

        <div className='text-success'> <h4>Success!</h4></div>
            <h5>Name: <span className="text-primary">{name}</span></h5>
            <h5>Roll Number : <span className="text-primary">{roll}</span></h5>
            <h5>Sex         : <span className="text-primary">{gender}</span></h5>
            <h5>Branch      : <span className="text-primary">{branch}</span></h5>
            <div className='mt-4'><h5 className='d-inline'></h5><span className='btn btn-success text-white'>Total Percentage:  {percentage}%</span></div>

            
        </div>
    </div>
  )
}
