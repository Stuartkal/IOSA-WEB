import {combineReducers} from 'redux'
import authReducer from './auth'
import breedingReducer from './get'
import medicationReducer from './medication'

export default combineReducers({
    auth: authReducer,
    breeding: breedingReducer,
    notification: medicationReducer
})