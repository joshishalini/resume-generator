import React, {Component} from 'react'
import { Link } from "react-router-dom"

class Navbar extends Component {
  render(){
    return(
    <div>
      <nav className="navbar navbar-expand-lg px-5 shadow-sm p-3 bg-white rounded">
        <a className="navbar-brand" href="/">Resume Generator</a>
        <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/new-resume">New Resume</Link>
              </li>
            </ul>
      </nav>
    </div>
    )
  }
}

export default Navbar;