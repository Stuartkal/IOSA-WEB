import * as actionTypes from '../Action'
import {updateObject} from './utility'


const intitialState = {
    breedings:[],
    population:[],
    bookkeeping:[],
    loading: false,
    error: false
}

const get = (state = intitialState, action) => {
    switch(action.type){
        //Get Breeding
        case actionTypes.GET_BREEDING_ACTION:
            return updateObject(state, {
                loading: true,
            })
            case actionTypes.GET_BREEDING_SUCCESS:
            return updateObject(state, {
                breedings: action.breeding,
                loading: false,
            })
            case actionTypes.GET_BREEDING_FAIL:
            return updateObject(state, {
                loading: false,
                error: true
            })
            //Get Population
            case actionTypes.GET_POPULATION_ACTION:
            return updateObject(state, {
                loading: true,
            })
            case actionTypes.GET_POPULATION_SUCCESS:
            return updateObject(state, {
                population: action.populate,
                loading: false,
            })
            case actionTypes.GET_POPULATION_FAIL:
            return updateObject(state, {
                loading: false,
                error: true
            })
            //Get BookKeeping
            case actionTypes.GET_BOOK_KEEPING_ACTION:
            return updateObject(state, {
                loading: true,
            })
            case actionTypes.GET_BOOK_KEEPING_SUCCESS:
            return updateObject(state, {
                bookkeeping: action.book,
                loading: false,
            })
            case actionTypes.GET_BOOK_KEEPING_FAIL:
            return updateObject(state, {
                loading: false,
                error: true
            })
        default: return state
    }
}

export default get

