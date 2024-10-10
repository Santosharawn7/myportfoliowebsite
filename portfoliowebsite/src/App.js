import React from "react";
import Contact from "./Components/Contact";
import AboutUs from "./Components/AboutUs";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Components/Home";
import Projects from "./Components/Projects";

function App() {
  return (
    
    <div>
       <Router>
       <header class="sticky top-0 z-50">

     
        </header>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />}/>
                <Route path="/projects" element={<Projects/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;