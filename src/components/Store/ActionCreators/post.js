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
    
) => {
    return (dispatch, getState) => {
        dispatch(addBreedAction())
        
        const weaningDate = new Date(kindlingDate).setDate(new Date(kindlingDate).getDate()+ 30)
        

        const token = getState().auth.token
        const data = {
            breed,
            dateOfBirth: moment(dateOfBirth).format('DD-MM-YYYY'),
            gender,
            parent,
            femaleCageNumber,
            maleCageNumber,
            breedingDate: moment(breedingDate).format('DD-MM-YYYY'),
            kindlingBox: moment(new Date(breedingDate).setDate(new Date(breedingDate).getDate()+ 25)).format('DD-MM-YYYY'),
            kindlingDate: moment(kindlingDate).format('DD-MM-YYYY'),
            numberAlive,
            numberDead,
            weaningDate: moment(weaningDate).format('DD-MM-YYYY') ,
            nextBreedingDate: moment(new Date(weaningDate).setDate(new Date(weaningDate).getDate()+ 7)).format('DD-MM-YYYY'),
        }

        axios.post('http://localhost:8080/breeds/breeding', data,{
            headers:{
                ContentType: 'Application/json',
                Authorization: token
            }
        })
        .then(res => {
            console.log(res)
        })
        .catch(error=> {
            console.log(error)
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

export const addPopulation = (numberOfNewborns,numberOfDeaths) => {
    return (dispatch,getState) => {
        dispatch(populationAction())
        
        const token = getState().auth.token

        const data = {
            numberOfNewborns,
            numberOfDeaths
        }

        axios.post('http://localhost:8080/breeds/population', data,{
            headers:{
                ContentType: 'Application/json',
                Authorization: token
            }
        })
        .then(res => {
            console.log(res)
        })
        .catch(error=> {
            console.log(error)
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
) => {
    return (dispatch,getState) => {
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

        axios.post('http://localhost:8080/breeds/book-keeping', data,{
            headers:{
                ContentType: 'Application/json',
                Authorization: token
            }
        })
        .then(res => {
            console.log(res)
        })
        .catch(error=> {
            console.log(error)
        })

    }
}