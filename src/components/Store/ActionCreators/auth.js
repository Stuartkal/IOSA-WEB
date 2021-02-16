import * as actionTypes from '../Action'
import axios from 'axios'

export const loginAction = () => {
    return {
        type: actionTypes.LOGIN_ACTION
    }
}

export const loginOutAction = () => {
    return {
        type: actionTypes.LOGIN_ACTION
    }
}

export const loginSuccess = (userId, token, username, expenditure, grossRevenue, netRevenue) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        userId,
        token,
        username,
        expenditure,
        grossRevenue,
        netRevenue
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

        axios.post('https://iosa-api.herokuapp.com/auth/signin', user,
            {
                headers:
                {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                }
            }
        )
            .then(res => {
                console.log(res.data.token)
                dispatch(loginSuccess(res.data.userId, res.data.token, res.data.username, res.data.expenditure, res.data.gross_revenue, res.data.net_revenue))
            })
            .catch(error => {
                console.log(error)
            })
    }
}
