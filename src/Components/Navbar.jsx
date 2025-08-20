import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

let modeText;
let gradText;
export default function Navbar(props) {
    if(props.mode === 'light'){
        modeText = 'Enable dark mode'
    }
    else{
        modeText = 'Enable light mode'
    }
    if(props.mode === 'light'){
        gradText = 'Enable gradient mode'
    }
    else{
        gradText = 'Enable light mode'
    }
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">TextUtils</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-primary" type="submit">Search</button>
                        </form>
                        <div className={`form-check form-switch mx-3 text-${props.mode === 'dark'?'light':'dark'}`}>
                            <input onClick={props.toggleGrad} className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault"/>
                            <label className="form-check-label" htmlFor="switchCheckDefault">{gradText}</label>
                        </div>
                        <div className={`form-check form-switch mx-3 text-${props.mode === 'dark'?'light':'dark'}`}>
                            <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id = "switchCheckGrad"/>
                            <label className="form-check-label" htmlFor="switchCheckGrad">{modeText}</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    modeText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set title here',
}