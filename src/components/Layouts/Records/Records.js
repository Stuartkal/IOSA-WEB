import React,{useEffect} from 'react'
import Navbar from '../../Routes/Navbar'

import './record.scss'
const Records = (props) => {

   const  breedingClickHandler = () => {
        props.history.push('/breeding-record')
    }

    const  populationClickHandler = () => {
        props.history.push('/population-records')
    }

    const  bookkeepingClickHandler = () => {
        props.history.push('/bookkeeping-records')
    }

    const  medicationClickHandler = () => {
        props.history.push('/medication-records')
    }

    return (
        <div>
            <Navbar/>
            <div className="records-main">
                <div className="btn-container">
                    <button onClick={breedingClickHandler}>Breeding Records</button>
                    <button onClick={bookkeepingClickHandler}>Book Keeping Records</button>
                    <button onClick={populationClickHandler}>Population Record Records</button>
                    <button onClick={medicationClickHandler}>Medication Records</button>
                </div>
            </div>
        </div>
    )
}

    

export default (Records)
