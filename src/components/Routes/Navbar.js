import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/images/logo2.jpeg'

import './navbar.scss'
const Navbar = () => {
    return (
        <div className="nav-main">
            <div className="nav-container">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                    <Link className="link" to="/">Record Keeping System</Link>
                </div>
                <div className="profile">
                    <Link className="link" to="/records">Records</Link>
                    <h5>welcome John Doe</h5>
                </div>
            </div>
        </div>
    )
}

export default Navbar
