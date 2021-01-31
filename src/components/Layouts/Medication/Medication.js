import React,{useState} from 'react'
import Navbar from '../../Routes/Navbar'
import {useDispatch} from 'react-redux'

import * as actionCreators from '../../Store/ActionCreators'

import moment from 'moment'


import './Medication.scss'
const Medication = () => {

    const [state, setState] = useState({
        _medication:'',
        medicationDate:'',
        cageNumber:'',
        gender:'',
        medicationType:'',
        remarks:'',
        error:''
    })

    const dispatch = useDispatch()

    const date = moment(state.medicationDate).format('DD-MM-YYYY')

   
    const handleAddMedication = (e) => {
        e.preventDefault()
        dispatch(actionCreators.addMedication(
            state._medication,
            date,
            state.cageNumber,
            state.gender,
            state.medicationType,
            state.remarks,
            (res) => {
                if(res.success === true){
                    setState({ 
                        _medication: '',
                        medicationDate:'',
                        cageNumber:'',
                        gender:'',
                        medicationType:'',
                        remarks:'',
                        message:'',
                        error: 'Record Added!'
                    })
                }
                if(res.success === false){
                    setState({ error: 'Invalid Input, Please enter all fields'})
                }
            }
        ))
    }

    return (
        <div>
            <Navbar/>
            <form onSubmit={handleAddMedication} className="medication-main">
                    <h2>Medication</h2>
                    <div className="medication-row">
                        <div className="medication-form">
                            <h5>Medication <strong style={{color:'red'}}>*</strong></h5>
                            <input value={state._medication} onChange={(e)=> setState({...state, _medication: e.target.value})} type="text"/>
                        </div>
                        <div className="medication-form">
                            <h5>Gender <strong style={{color:'red'}}>*</strong></h5>
                            <input value={state.gender} onChange={(e)=> setState({...state, gender: e.target.value})} type="text"/>
                        </div>
                    </div>
                    <div className="medication-row">
                        <div className="medication-form">
                            <h5>Date <strong style={{color:'red'}}>*</strong></h5>
                            <input value={state.medicationDate} onChange={(e)=> setState({...state, medicationDate: e.target.value})} type="date"/>
                        </div>
                        <div className="medication-form">
                            <h5>Medication Type <strong style={{color:'red'}}>*</strong></h5>
                            <input value={state.medicationType} onChange={(e)=> setState({...state, medicationType: e.target.value})} type="text"/>
                        </div>
                    </div>
                    <div className="medication-row">
                        <div className="medication-form">
                            <h5>Cage Number <strong style={{color:'red'}}>*</strong></h5>
                            <input value={state.cageNumber} onChange={(e)=> setState({...state, cageNumber: e.target.value})} type="number"/>
                        </div>
                        <div className="medication-form">
                            <h5>Remarks <strong style={{color:'red'}}>*</strong></h5>
                            <input value={state.remarks} onChange={(e)=> setState({...state, remarks: e.target.value})} type="text"/>
                        </div>
                    </div>
                    <button>Add Record</button>
                    {!state.error ? <p>All fields are Required <strong style={{color:'red'}}>*</strong></p> : <p style={{color:'#d45821'}}>{state.error}</p>}
            </form>
        </div>
    )
}


export default Medication
