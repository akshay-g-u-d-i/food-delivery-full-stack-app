import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer() {
  return (
    <div className='container mx-auto'>
      <footer className=" py-3 my-4 border-top">
        <div>
          <div className="text-muted text-center">© 2023 FoodieFast, Inc</div>
        </div>
        <div className=" text-center">
          Designed and developed by Akshay
        </div>
      </footer>
    </div>
  )
}
