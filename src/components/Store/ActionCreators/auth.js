import * as actionTypes from '../Action'
import axios from 'axios'

export const loginAction = () => {
    return {
        type: actionTypes.LOGIN_ACTION
    }
}

export const loginSuccess = (userId, token, username) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        userId,
        token,
        username
    }
}

export const loginFail = () => {
    return {
        type: actionTypes.LOGIN_FAIL
    }
}

export const login = (username, password) => {
    return dispatch => {
        dispatch(loginAction())
        const user = {
            username,
            password
        }
        
        axios.post('http://localhost:8080/auth/signin',user, 
        {
            headers: {"Access-Control-Allow-Origin": "*"}
        }
        )
        .then(res => {
            // console.log(res)
            dispatch(loginSuccess(res.data.userId, res.data.token, res.data.username))
        })
        .catch(error => {
            console.log(error)
        })
    }
}