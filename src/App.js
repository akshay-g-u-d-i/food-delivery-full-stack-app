import './App.css';
import Home from './screens/Home.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './screens/Login';

// import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
// import "https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js"

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import Signup from './screens/Signup';


export default function App() {
  return (
    <Router className="App">
      <div style={{fontFamily:'Alkatra'}}>
        <Routes>
          <Route exact path = "/" element={<Home />} />
          <Route exact path = "/login" element = {<Login />} />
          <Route exact path = "/signup" element = {<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

// export default App;
