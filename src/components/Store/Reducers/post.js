import * as actionTypes from '../Action'
import {updateObject} from './utility'


const intitialState = {
    username:'',
    userId:'',
    token:'',
    loading: false,
    error: false
}

const post = (state = intitialState, action) => {
    switch(action.type){
        case actionTypes.LOGIN_ACTION:
            return updateObject(state, {
                loading: true,
            })
            case actionTypes.LOGIN_SUCCESS:
            return updateObject(state, {
                loading: false,
            })
            case actionTypes.LOGIN_FAIL:
            return updateObject(state, {
                loading: false,
                error: true
            })
        default: return state
    }
}

export default post

