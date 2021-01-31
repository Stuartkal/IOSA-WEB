import axios from 'axios'


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
         })
         .catch(err => {
             console.log(err)
         })
    }
}