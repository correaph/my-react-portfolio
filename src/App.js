import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import MainPage from "./MainPage";
import Contact from "./Contact";
import Portfolio from "./Portfolio";

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
            <li className="nav-item active">
              <Link to="/" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/portfolio" className="nav-link">Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="content">
        <Route path="/contact" component={Contact} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/" exact={true} component={MainPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;