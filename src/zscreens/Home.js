import React, { useState } from 'react'
import Navbar from '../components2/Navbar'
import Video from '../components2/Video'
import Card from '../components/Card'
import Details from '../components2/Details'

export default function Home() {

  return (
    <div>

      <Navbar />
      <div className='container-fluid mt-3'>
        <div className='row'>
          <div className="col-7">
            <Video />
          </div>
          <div className="col-5 text-center mt-5">
            <Details/>
          </div>
        </div>
      </div>

    </div>
  )
}
