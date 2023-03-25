import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const navStyle={
    borderBottom: '1px solid grey'
}

export default function Navbar(props) {
  return (
        <nav style={navStyle} className={`navbar navbar-expand-lg bg-body-tertiary bg-${props.theme}`} data-bs-theme={`${props.theme}`}>
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/Feedback">Feedback</Link>
                    </li>
                    
                </ul>
                {/* <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
                <div className="form-check form-switch">
                    <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label className={`form-check-label text-${props.theme==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">{`${props.theme==='light'?'Enable Dark Mode':'Enable Light Mode'}`} </label>
                </div>
                </div>
            </div>
         </nav>
    
        
  )
}

Navbar.prototype ={
    title: PropTypes.string
}

Navbar.defaultProps = {
    title: 'Title plz'
}
