import * as actionTypes from '../Action'
import axios from 'axios'
import moment from 'moment'

//Breeding
export const addBreedAction = () => {
    return {
        type: actionTypes.ADD_BREEDING_ACTION
    }
}

export const addSuccess = () => {
    return {
        type: actionTypes.ADD_BREEDING_SUCCESS
    }
}

export const addFail = () => {
    return {
        type: actionTypes.ADD_BREEDING_FAIL
    }
}

export const addBreed = (
    breed,
    dateOfBirth,
    gender,
    parent,
    femaleCageNumber,
    maleCageNumber,
    breedingDate,
    kindlingDate,
    numberAlive,
    numberDead,
    callback
) => {
    return (dispatch, getState) => {
        dispatch(addBreedAction())

        const weaningDate = new Date(kindlingDate).setDate(new Date(kindlingDate).getDate() + 30)


        const token = getState().auth.token
        const data = {
            breed,
            dateOfBirth: moment(dateOfBirth).format('DD-MM-YYYY'),
            gender,
            parent,
            femaleCageNumber,
            maleCageNumber,
            breedingDate: moment(breedingDate).format('DD-MM-YYYY'),
            kindlingBox: moment(new Date(breedingDate).setDate(new Date(breedingDate).getDate() + 25)).format('DD-MM-YYYY'),
            kindlingDate: moment(kindlingDate).format('DD-MM-YYYY'),
            numberAlive,
            numberDead,
            weaningDate: moment(weaningDate).format('DD-MM-YYYY'),
            nextBreedingDate: moment(new Date(weaningDate).setDate(new Date(weaningDate).getDate() + 7)).format('DD-MM-YYYY'),
        }

        axios.post('https://iosa-api.herokuapp.com/breeds/breeding', data, {
            headers: {
                ContentType: 'Application/json',
                Authorization: token
            }
        })
            .then(res => {
                // console.log(res)
                callback({ success: true, res })
            })
            .catch(error => {
                callback({ success: false, res: error })
                // console.log(error)
            })
    }
}

//Population Record
export const populationAction = () => {
    return {
        type: actionTypes.ADD_POPULATION_ACTION
    }
}

export const populationSuccess = () => {
    return {
        type: actionTypes.ADD_POPULATION_SUCCESS
    }
}

export const populationFail = () => {
    return {
        type: actionTypes.ADD_POPULATION_FAIL
    }
}

// Population
export const addPopulation = (year, month, recordDate, numberOfFemales, numberOfMales, numberOfNewborns, numberOfDeathsInMonth, callback) => {
    return (dispatch, getState) => {
        dispatch(populationAction())

        const token = getState().auth.token

        const data = {
            year,
            month,
            recordDate,
            numberOfFemales,
            numberOfMales,
            numberOfNewborns,
            numberOfDeathsInMonth
        }

        axios.post('https://iosa-api.herokuapp.com/breeds/population', data, {
            headers: {
                ContentType: 'Application/json',
                Authorization: token
            }
        })
            .then(res => {
                callback({ success: true, res })
                // console.log(res)
            })
            .catch(error => {
                // console.log(error)
                callback({ success: false, res: error })
            })

    }
}

//Medication
export const medicationAction = () => {
    return {
        type: actionTypes.ADD_POPULATION_ACTION
    }
}

export const medicationSuccess = () => {
    return {
        type: actionTypes.ADD_POPULATION_SUCCESS
    }
}

export const medicationFail = () => {
    return {
        type: actionTypes.ADD_POPULATION_FAIL
    }
}

export const addMedication = (_medication, medicationDate, cageNumber, gender, medicationType, remarks, callback) => {
    return (dispatch, getState) => {
        dispatch(medicationAction())

        const token = getState().auth.token

        const data = {
            _medication: _medication,
            medicationDate: medicationDate,
            cageNumber: cageNumber,
            gender: gender,
            medicationType: medicationType,
            remarks: remarks
        }

        axios.post('https://iosa-api.herokuapp.com/breeds/medication', data, {
            headers: {
                ContentType: 'Application/json',
                Authorization: token
            }
        })
            .then(res => {
                callback({ success: true, res })
                // console.log(res)
            })
            .catch(error => {
                // console.log(error)
                callback({ success: false, res: error })
            })

    }
}

//Book Keeping

export const bookKeepingAction = () => {
    return {
        type: actionTypes.ADD_BOOK_KEEPING_ACTION
    }
}

export const bookKeepingSuccess = () => {
    return {
        type: actionTypes.ADD_BOOK_KEEPING_SUCCESS
    }
}

export const bookKeepingFail = () => {
    return {
        type: actionTypes.ADD_BOOK_KEEPING_FAIL
    }
}

export const addBookKeeping = (
    food,
    medication,
    salaries,
    allowances,
    miscellaneous,
    animalsBought,
    rabbitSales,
    farmVisits,
    foodSales,
    stockFood,
    stockAnimals,
    stockMedication,
    callback
) => {
    return (dispatch, getState) => {
        dispatch(bookKeepingAction())

        const token = getState().auth.token

        const data = {
            food,
            medication,
            salaries,
            allowances,
            miscellaneous,
            animalsBought,
            rabbitSales,
            farmVisits,
            foodSales,
            stockFood,
            stockAnimals,
            stockMedication,
        }

        axios.post('https://iosa-api.herokuapp.com/breeds/book-keeping', data, {
            headers: {
                ContentType: 'Application/json',
                Authorization: token
            }
        })
            .then(res => {
                // console.log(res)
                callback({ success: true, res })
            })
            .catch(error => {
                callback({ success: false, res: error })
                // console.log(error)
            })

    }
}

export const postRevenue = (expenditure, gross_revenue, net_revenue) => {
    return (dispatch, getState) => {

        const token = getState().auth.token
        const userId = getState().auth.userId

        const data = {
            expenditure: expenditure,
            gross_revenue: gross_revenue,
            net_revenue: net_revenue
        }

        axios.post(`https://iosa-api.herokuapp.com/auth/revenue/${userId}`, data, {
            headers: {
                ContentType: 'Application/json',
                Authorization: token
            }
        })
            .then((res => {
                // console.log(res)
            }))
            .catch(error => {
                console.log(error)
            })
    }
}