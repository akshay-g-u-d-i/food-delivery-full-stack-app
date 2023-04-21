import React from 'react'
import Navbar from './components/Navbar'
import Home from './zscreens/Home'
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import Signup from './screens/Signup';
import Login from './screens/Login';

export default function ZApp() {
  return (
    <Router className="ZApp">
      <div style={{fontFamily:'Alkatra'}}>
        <Routes>
          <Route exact path = "/" element = {<Home />} />
        </Routes>
      </div>
    </Router>
  )
}
