import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import MainPage from "./MainPage";
import Contact from "./Contact";
import Portfolio from "./Portfolio";

const handleRoute = (e) => {
  var route = e.target.getAttribute("id");
  document.getElementById("link1").classList.remove("active");
  document.getElementById("link1").classList.remove("active"); 
  document.getElementById("link1").classList.remove("active");
  document.getElementById(route.replace('route','link')).classList.add("active");
};

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link to="/" className="navbar-brand">Paulo H Corrêa</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active" id="route1">
              <Link to="/" className="nav-link" id="link1" onClick={handleRoute}>About</Link>
            </li>
            <li className="nav-item" id="route2">
              <Link to="/portfolio" className="nav-link" id="link2" onClick={handleRoute}>Portfolio</Link>
            </li>
            <li className="nav-item" id="route3">
              <Link to="/contact" className="nav-link" id="link3" onClick={handleRoute}>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="content">
        <Route path="/" exact={true} component={MainPage} />
        <Route path="/contact" component={Contact} />
        <Route path="/portfolio" component={Portfolio} />
      </div>
    </BrowserRouter>
  );
}

export default App;