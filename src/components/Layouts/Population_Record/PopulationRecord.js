import React,{useState} from 'react'
import Navbar from '../../Routes/Navbar'
import { connect } from 'react-redux'
import * as actionCreators from '../../Store/ActionCreators'

import './population.scss'
const PopulationRecord = (props) => {

    const [state, setState] = useState({
        numberOfNewborns: '',
        numberOfDeaths: ''
    })
    
    const handleAddPopulation = (e) => {
        e.preventDefault()
        props.addPopulation(state.numberOfNewborns, state.numberOfDeaths)
    }

    return (
        <div>
            <Navbar/>
            <form onSubmit={handleAddPopulation} className="population-main">
                <h2>Population Records</h2>
                <div className="population-form"> 
                    <h5>Number of Newborns <strong style={{color:'red'}}>*</strong></h5>
                    <input value={state.numberOfNewborns} onChange={(e)=> setState({...state, numberOfNewborns: e.target.value})} type="text"/>
                </div>
                <div className="population-form"> 
                    <h5>Number of Deaths <strong style={{color:'red'}}>*</strong></h5>
                    <input value={state.numberOfDeaths} onChange={(e)=> setState({...state, numberOfDeaths: e.target.value})} type="text"/>
                </div>
                <button>Add Record</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addPopulation: (numberOfNewborns,numberOfDeaths) => dispatch(actionCreators.addPopulation(numberOfNewborns,numberOfDeaths))
})

export default connect(null,mapDispatchToProps) (PopulationRecord)
