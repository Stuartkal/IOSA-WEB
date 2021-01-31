import axios from 'axios'
import * as actionsTypes from '../Action'

//KindlingBox Notification ActionCreators

export const kindlingBoxSuccess = (kindling) => {
    return {
        type: actionsTypes.GET_KINDLINGBOX_SUCCESS,
        kindling
    }
}


export const kindlingBox = () => {
    return (dispatch,getState) => {

        const token = getState().auth.token

        axios.get('https://iosa-api.herokuapp.com/breeds/kindling-box',{
            headers:{
                ContentType: 'Application/json',
                Authorization: token
            }
         })
         .then(res => {
             dispatch(kindlingBoxSuccess(res.data.breedings))
            // console.log('kindling',res.data.breedings)
         })
         .catch(err => {
             console.log(err)
         })

    }
}

//Weaning Date Notification ActionCreators


export const weaningDateSuccess = (weaning) => {
    return {
        type: actionsTypes.GET_WEANINGDATE_SUCCESS,
        weaning
    }
}


export const weaningDate = () => {
    return (dispatch, getState) => {
        
        const token = getState().auth.token

        axios.get('https://iosa-api.herokuapp.com/breeds/weaning-date',{
            headers:{
                ContentType: 'Application/json',
                Authorization: token
            }
         })
         .then(res => {
             dispatch(weaningDateSuccess(res.data.breedings))
            // console.log('weaning',res.data.breedings)
         })
         .catch(err => {
             console.log(err)
         })

    
    }
}

//Next Breeding Date Notification ActionCreators

export const nextBreedingDateSuccess = (nextBreeding) => {
    return {
        type: actionsTypes.GET_NEXTBREEDINGDATE_SUCCESS,
        nextBreeding
    }
}


export const nextBreedingDate = () => {
    return (dispatch, getState) => {
        
        const token = getState().auth.token

        axios.get('https://iosa-api.herokuapp.com/breeds/next-breeding-date',{
            headers:{
                ContentType: 'Application/json',
                Authorization: token
            }
         })
         .then(res => {
             dispatch(nextBreedingDateSuccess(res.data.breedings))
            // console.log('nextBreedingDate',res.data.breedings)
         })
         .catch(err => {
             console.log(err)
         })
    }
}