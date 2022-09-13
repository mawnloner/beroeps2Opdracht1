import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/Verkoop">Verkoop</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar