import * as actionTypes from '../Action'
import axios from 'axios'

//Get Breeding
export const getBreedingAction = () => {
    return {
        type: actionTypes.GET_BREEDING_ACTION
    }
}

export const getBreedingSuccess = (breeding) => {
    return {
        type: actionTypes.GET_BREEDING_SUCCESS,
        breeding
    }
}

export const getBreedingFail = () => {
    return {
        type: actionTypes.GET_BREEDING_FAIL
    }
}

export const getBreeding = () => {
    return (dispatch, getState) => {
        dispatch(getBreedingAction())

        const token = getState().auth.token

        axios.get('https://iosa-api.herokuapp.com/breeds/breedings', {
            headers: {
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
        type: actionTypes.GET_POPULATION_ACTION
    }
}

export const getPopulationSuccess = (populate) => {
    return {
        type: actionTypes.GET_POPULATION_SUCCESS,
        populate
    }
}

export const getPopulationFail = () => {
    return {
        type: actionTypes.GET_POPULATION_FAIL
    }
}

export const getPopulation = () => {
    return (dispatch, getState) => {
        dispatch(getPopulationAction())

        const token = getState().auth.token

        axios.get('https://iosa-api.herokuapp.com/breeds/population', {
            headers: {
                ContentType: 'Application/json',
                Authorization: token
            }
        })
            .then(res => {
                // console.log(res)
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
        type: actionTypes.GET_BOOK_KEEPING_ACTION
    }
}

export const getBookKeepingSuccess = (book) => {
    return {
        type: actionTypes.GET_BOOK_KEEPING_SUCCESS,
        book
    }
}

export const getBookKeepingFail = () => {
    return {
        type: actionTypes.GET_BOOK_KEEPING_FAIL
    }
}

export const getBookKeeping = () => {
    return (dispatch, getState) => {
        dispatch(getBookKeepingAction())

        const token = getState().auth.token

        axios.get('https://iosa-api.herokuapp.com/breeds/book-keeping', {
            headers: {
                ContentType: 'Application/json',
                Authorization: token
            }
        })
            .then(res => {
                // console.log(res)
                dispatch(getBookKeepingSuccess(res.data.bookkeeping))
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const getMedicationAction = (medicate) => {
    return {
        type: actionTypes.GET_MEDICATION_ACTION,
        medicate
    }
}

export const medication = () => {
    return (dispatch, getState) => {

        const token = getState().auth.token

        axios.get('https://iosa-api.herokuapp.com/breeds/medication', {
            headers: {
                ContentType: 'Application/json',
                Authorization: token
            }
        })
            .then(res => {
                console.log(res)
                dispatch(getMedicationAction(res.data.medication))
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const getUserRevenueAction = (expenditure, grossRevenue, netRevenue) => {
    return {
        type: actionTypes.GET_USER_PROFILE_ACTION,
        expenditure,
        grossRevenue,
        netRevenue
    }
}

export const userRevenue = () => {
    return (dispatch, getState) => {

        const token = getState().auth.token
        const userId = getState().auth.userId

        axios.get(`https://iosa-api.herokuapp.com/auth/user-profile/${userId}`, {
            headers: {
                ContentType: 'Application/json',
                Authorization: token
            }
        })
            .then((res => {
                // console.log(res.data.user)
                dispatch(getUserRevenueAction(res.data.user.expenditure, res.data.user.gross_revenue, res.data.user.net_revenue))
            }))
            .catch(error => {
                console.log(error)
            })
    }
}
