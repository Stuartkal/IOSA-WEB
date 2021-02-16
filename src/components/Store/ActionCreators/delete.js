import axios from 'axios'
import * as actionTypes from '../Action'

export const deleteMedicationAction = (id) => {
    return {
        type: actionTypes.DELETE_MEDICATION_SUCCESS,
        id
    }
}

export const deletePopulationAction = (id) => {
    return {
        type: actionTypes.DELETE_POPULATION_SUCCESS,
        id
    }
}

export const deleteBreedingAction = (id) => {
    return {
        type: actionTypes.DELETE_BREEDING_SUCCESS,
        id
    }
}

export const deleteBookkeepingAction = (id) => {
    return {
        type: actionTypes.DELETE_BOOKKEEPING_SUCCESS,
        id
    }
}

export const deleteBreeding = (id) => {
    return (dispatch,getState) => {
        const token = getState().auth.token

        axios.delete(`https://iosa-api.herokuapp.com/breeds/breeding/${id}`,{
            headers:{
                ContentType: 'Application/json',
                Authorization: token
            }
         })
         .then(res => {
             console.log(res)
             dispatch(deleteBreedingAction(id))
         })
         .catch(err => {
             console.log(err)
         })
    }
}

export const deleteBookkeeping = (id) => {
    return (dispatch,getState) => {
        const token = getState().auth.token

        axios.delete(`https://iosa-api.herokuapp.com/breeds/book-keeping/${id}`,{
            headers:{
                ContentType: 'Application/json',
                Authorization: token
            }
         })
         .then(res => {
             console.log(res)
             dispatch(deleteBookkeepingAction(id))
         })
         .catch(err => {
             console.log(err)
         })
    }
}

export const deletePopulation = (id) => {
    return (dispatch,getState) => {
        const token = getState().auth.token

        axios.delete(`https://iosa-api.herokuapp.com/breeds/population/${id}`,{
            headers:{
                ContentType: 'Application/json',
                Authorization: token
            }
         })
         .then(res => {
             console.log(res)
             dispatch(deletePopulationAction(id))
             
         })
         .catch(err => {
             console.log(err)
         })
    }
}

export const deleteMedication = (id) => {
    return (dispatch,getState) => {
        const token = getState().auth.token

        axios.delete(`https://iosa-api.herokuapp.com/breeds/medication/${id}`,{
            headers:{
                ContentType: 'Application/json',
                Authorization: token
            }
         })
         .then(res => {
             console.log(res)
             dispatch(deleteMedicationAction(id))
         })
         .catch(err => {
             console.log(err)
         })
    }
}