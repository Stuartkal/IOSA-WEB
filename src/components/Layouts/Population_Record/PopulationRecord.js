import React,{useState} from 'react'
import moment from 'moment'
import Navbar from '../../Routes/Navbar'
import { useDispatch } from 'react-redux'
import * as actionCreators from '../../Store/ActionCreators'

import './population.scss'
const PopulationRecord = () => {

    const [state, setState] = useState({
        year:'',
        month:'',
        recordDate:'',
        numberOfFemales:'',
        numberOfMales:'',
        numberOfNewborns: '',
        numberOfDeathsInMonth: '',
        error:''
    })

    const dispatch = useDispatch()

    const date = moment(state.recordDate).format('DD-MM-YYYY')
    
    const handleAddPopulation = (e) => {
        e.preventDefault()
        dispatch(actionCreators.addPopulation(
            state.year,
            state.month,
            date,
            state.numberOfFemales,
            state.numberOfMales,
            state.numberOfNewborns, 
            state.numberOfDeathsInMonth,
            (res) => {
                if(res.success === true){
                    setState({ 
                        year:'',
                        month:'',
                        recordDate:'',
                        numberOfFemales:'',
                        numberOfMales:'',
                        numberOfNewborns: '',
                        numberOfDeathsInMonth: '',
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
            <form onSubmit={handleAddPopulation} className="population-main">
                <h2>Population Records</h2>
                <div className="population-row">
                    <div className="population-form"> 
                        <h5>Year <strong style={{color:'red'}}>*</strong></h5>
                        <select  value={state.year} onChange={(e)=> setState({...state, year: e.target.value})}>
                            <option value=" ">select year</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                            <option value="2028">2028</option>
                            <option value="2029">2029</option>
                            <option value="2030">2030</option>
                        </select>
                    </div>
                    <div className="population-form"> 
                        <h5>Number Of Females <strong style={{color:'red'}}>*</strong></h5>
                        <input value={state.numberOfFemales} onChange={(e)=> setState({...state, numberOfFemales: e.target.value})} type="number"/>
                    </div>
                </div>
                <div className="population-row">
                    <div className="population-form"> 
                        <h5>Month <strong style={{color:'red'}}>*</strong></h5>
                        <select  value={state.month} onChange={(e)=> setState({...state, month: e.target.value})}>
                            <option value="">select month</option>
                            <option value="January">January </option>
                            <option value="Febuary">Febuary </option>
                            <option value="March">March </option>
                            <option value="April">April </option>
                            <option value="May">May</option>
                            <option value="June">June </option>
                            <option value="July">July </option>
                            <option value="August">August </option>
                            <option value="September">September </option>
                            <option value="October">October </option>
                            <option value="November">November </option>
                            <option value="December">December </option>
                        </select>
                        
                    </div>
                    <div className="population-form"> 
                        <h5>Number of New Borns <strong style={{color:'red'}}>*</strong></h5>
                        <input value={state.numberOfNewborns} onChange={(e)=> setState({...state, numberOfNewborns: e.target.value})} type="number"/>
                    </div>
                </div>
                <div className="population-row">
                    <div className="population-form"> 
                        <h5>Date <strong style={{color:'red'}}>*</strong></h5> 
                        <input value={state.recordDate} onChange={(e)=> setState({...state, recordDate: e.target.value})} type="date"/>
                    </div>
                    <div className="population-form"> 
                        <h5>Number of Deaths In The Month <strong style={{color:'red'}}>*</strong></h5>
                        <input value={state.numberOfDeathsInMonth} onChange={(e)=> setState({...state, numberOfDeathsInMonth: e.target.value})} type="number"/>
                    </div>
                </div>
                <div className="population-row">
                    <div className="population-form"> 
                        <h5>Number of Males <strong style={{color:'red'}}>*</strong></h5>
                        <input value={state.numberOfMales} onChange={(e)=> setState({...state, numberOfMales: e.target.value})} type="number"/>
                    </div>
                </div>
                <button>Add Record</button>
                {!state.error ? <p>All fields are Required <strong style={{color:'red'}}>*</strong></p> : <p style={{color:'#d45821'}}>{state.error}</p>}
            </form>
        </div>
    )
}


export default PopulationRecord
