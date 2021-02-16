import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import logo from '../../assets/images/logo2.jpeg'
import storage from 'redux-persist/lib/storage'
import * as actionCreators from '../Store/ActionCreators'

import './navbar.scss'
const Navbar = (props) => {

    const username = useSelector(state => state.auth.username)

    const disapatch = useDispatch()

    const logoutHandler = () => {
        disapatch(actionCreators.loginOutAction())
        storage.removeItem('persist:root')
        props.history.push('/')
    }

    return (
        <div className="nav-main">
            <div className="nav-container">
                <div className="logo">
                    <img src={logo} alt="logo" />
                    <Link className="link" to="/">Record Keeping System</Link>
                </div>
                <div className="profile">
                    <Link className="link" to="/records">Records</Link>
                    <h5>welcome {username}</h5>
                    <div onClick={logoutHandler} className="logout">
                        <h6>logout</h6>
                        <i class="material-icons">logout</i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Navbar)
