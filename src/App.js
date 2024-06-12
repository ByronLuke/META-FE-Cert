import React from "react";
import Contact from "./Contact";
import About from "./AboutLittleLemon";
import Homepage from "./Homepage";
import { Routes,Route,Link } from "react-router-dom";
import logo from "./assets/logo.png"


function App() {

  return (
    <React.Fragment>
      <nav>
  <Link to="/" className="nav-item">Homepage</Link>
  <Link to="/contact" className="nav-item">Contact</Link>
  <Link to="/about" className="nav-item">About</Link>
</nav>
<Routes>
  <Route path="/" element={<Homepage/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/contact" element={<Contact/>}/>
</Routes>
<img src={logo} alt="Logo"></img>
    </React.Fragment>

  );
};

export default App;