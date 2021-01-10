import React,{useState, useEffect} from 'react'
import logo from '../../../assets/images/logo1.jpeg'
import {connect, useSelector} from 'react-redux'
import * as actionCreators from '../../Store/ActionCreators'

import './Auth.scss'
const Auth = (props) => {

    // const [state, setState] = useState({
    //     username: 'tester',
    //     password: 'tester@123'
    // })

    const [username, setUsername] = useState('tester')
    const [password, setPassword] = useState('tester@123')

    const authenticated = useSelector(state => state.auth.authenticated)
    // console.log(authenticated)

    useEffect(() => {
      if(authenticated === true){
        props.history.push('/home')
      }
    },[authenticated])

    const handleLogin = (e) => {
        e.preventDefault()
        props.login(username,password)
    }

    return (
        <div >
           <form onSubmit={handleLogin} className="main-container">
                <img src={logo} alt="logo"/>
                 <div className="auth-container">
                    <div className="login-text">
                        <h3>Welcome Back!</h3>
                        <h5>Login to continue</h5>
                    </div>
                    <input type="text" placeholder="Username" value={username} onChange={(e)=> setUsername(e.target.value)}/>
                    <input type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                    <button>Login</button>
                </div>
           </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    login: (username,password) => dispatch(actionCreators.login(username,password))
})

export default connect(null, mapDispatchToProps)(Auth)
