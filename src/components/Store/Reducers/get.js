import * as actionTypes from '../Action'
import { updateObject } from './utility'


const intitialState = {
    breedings: [],
    population: [],
    bookkeeping: [],
    medication: [],
    expenditure: '',
    grossRevenue: '',
    netRevenue: '',
    loading: false,
    error: false
}

const get = (state = intitialState, action) => {
    switch (action.type) {
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
        //Get Medication
        case actionTypes.GET_MEDICATION_ACTION:
            return updateObject(state, {
                medication: action.medicate,
                loading: false,
            })

        //deleting Records
        case actionTypes.DELETE_MEDICATION_SUCCESS:
            return updateObject(state, {
                medication: state.medication.filter(({ _id }) => _id !== action.id),
                loading: false,
            })

        case actionTypes.DELETE_BREEDING_SUCCESS:
            return updateObject(state, {
                breedings: state.breedings.filter(({ _id }) => _id !== action.id),
                loading: false,
            })

        case actionTypes.DELETE_POPULATION_SUCCESS:
            return updateObject(state, {
                population: state.population.filter(({ _id }) => _id !== action.id),
                loading: false,
            })

        case actionTypes.DELETE_BOOKKEEPING_SUCCESS:
            return updateObject(state, {
                bookkeeping: state.bookkeeping.filter(({ _id }) => _id !== action.id),
                loading: false,
            })

        //revenue
        case actionTypes.GET_USER_PROFILE_ACTION:
            return updateObject(state, {
                expenditure: action.expenditure,
                grossRevenue: action.grossRevenue,
                netRevenue: action.netRevenue,
            })

        default: return state
    }
}

export default get

