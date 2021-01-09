import React,{useState} from 'react'
import Navbar from '../../Routes/Navbar'
import Form from './Form'
import {connect} from 'react-redux'
import * as actionCreators from '../../Store/ActionCreators'

import './breeding.scss'
const Breeding = (props) => {
    const [state, setState] = useState({
        breed:'',
        dateOfBirth:'',
        gender:'',
        parent:'',
        femaleCageNumber:'',
        maleCageNumber:'',
        breedingDate:'',
        kindlingDate:'',
        numberAlive:'',
        numberDead:'',
    })

    // console.log(state.kindlingDate)
    // console.log(state.numberDead)

    const addBreedHandler = (e) => {
        e.preventDefault()
        props.addBreed(
            state.breed,
            state.dateOfBirth,
            state.gender,
            state.parent,
            state.femaleCageNumber,
            state.maleCageNumber,
            state.breedingDate,
            state.kindlingDate,
            state.numberAlive,
            state.numberDead,
        )
    }


    return (
        <div>
            <Navbar/>
            <Form
                breed={state.breed}
                dateOfBirth={state.dateOfBirth}
                gender={state.gender}
                parent={state.parent}
                femaleCageNumber={state.femaleCageNumber}
                maleCageNumber={state.maleCageNumber}
                breedingDate={state.breedingDate}
                kindlingDate={state.kindlingDate}
                numberAlive={state.numberAlive}
                numberDead={state.numberDead}
                onChange={(field, value) => setState({...state, [field]: value})}
                addBreed={addBreedHandler}
            />
        </div>
    )
}

    const mapDispatchToProps = (dispatch) => ({
        addBreed: (
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
            ) => dispatch(actionCreators.addBreed(
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
                ))
    })

export default connect(null, mapDispatchToProps) (Breeding)
