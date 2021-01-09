import {combineReducers} from 'redux'
import authReducer from './auth'
import breedingReducer from './get'

export default combineReducers({
    auth: authReducer,
    breeding: breedingReducer
})