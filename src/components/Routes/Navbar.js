import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import logo from '../../assets/images/logo2.jpeg'

import './navbar.scss'
const Navbar = () => {

    const username = useSelector(state => state.auth.username)

    return (
        <div className="nav-main">
            <div className="nav-container">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                    <Link className="link" to="/">Record Keeping System</Link>
                </div>
                <div className="profile">
                    <Link className="link" to="/records">Records</Link>
                    <h5>welcome {username}</h5>
                </div>
            </div>
        </div>
    )
}

export default Navbar
