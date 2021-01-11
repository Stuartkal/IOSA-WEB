import * as actionTypes from '../Action'
import axios from 'axios'

//Get Breeding
export const getBreedingAction = () => {
    return {
        type:actionTypes.GET_BREEDING_ACTION
    }
}

export const getBreedingSuccess = (breeding) => {
    return {
        type:actionTypes.GET_BREEDING_SUCCESS,
        breeding
    }
}

export const getBreedingFail = () => {
    return {
        type:actionTypes.GET_BREEDING_FAIL
    }
}

export const getBreeding = () => {
    return (dispatch, getState) => {
         dispatch(getBreedingAction())

         const token = getState().auth.token

         axios.get('https://iosa-api.herokuapp.com/breeds/breedings',{
            headers:{
                ContentType: 'Application/json',
                Authorization: token
            }
         })
         .then(res => {
            // console.log(res.data.breedings)
            dispatch(getBreedingSuccess(res.data.breedings))
         })
         .catch(err => {
            console.log(err)
         })
    }
}

//Get Population
export const getPopulationAction = () => {
    return {
        type:actionTypes.GET_POPULATION_ACTION
    }
}

export const getPopulationSuccess = (populate) => {
    return {
        type:actionTypes.GET_POPULATION_SUCCESS,
        populate
    }
}

export const getPopulationFail = () => {
    return {
        type:actionTypes.GET_POPULATION_FAIL
    }
}

export const getPopulation = () => {
    return (dispatch, getState) => {
         dispatch(getPopulationAction())

         const token = getState().auth.token

         axios.get('https://iosa-api.herokuapp.com/breeds/population',{
            headers:{
                ContentType: 'Application/json',
                Authorization: token
            }
         })
         .then(res => {
            console.log(res)
            dispatch(getPopulationSuccess(res.data.population))
         })
         .catch(err => {
            console.log(err)
         })
    }
}


//Get Book Keeping
export const getBookKeepingAction = () => {
    return {
        type:actionTypes.GET_BOOK_KEEPING_ACTION
    }
}

export const getBookKeepingSuccess = (book) => {
    return {
        type:actionTypes.GET_BOOK_KEEPING_SUCCESS,
        book
    }
}

export const getBookKeepingFail = () => {
    return {
        type:actionTypes.GET_BOOK_KEEPING_FAIL
    }
}

export const getBookKeeping = () => {
    return (dispatch, getState) => {
         dispatch(getBookKeepingAction())

         const token = getState().auth.token

         axios.get('https://iosa-api.herokuapp.com/breeds/book-keeping',{
            headers:{
                ContentType: 'Application/json',
                Authorization: token
            }
         })
         .then(res => {
            console.log(res)
            dispatch(getBookKeepingSuccess(res.data.bookkeeping))
         })
         .catch(err => {
            console.log(err)
         })
    }
}