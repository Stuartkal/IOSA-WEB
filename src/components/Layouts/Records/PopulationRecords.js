import React,{useEffect,useCallback} from 'react'
import Navbar from '../../Routes/Navbar'
import {useDispatch, useSelector} from 'react-redux'
import * as actionTypes from '../../Store/ActionCreators'

import './record.scss'
const PopulationRecord = () => {

    const population = useSelector(state => state.breeding.population)  

    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(actionTypes.getPopulation())
    },[dispatch])


    console.log(population)

    const tableHeaders = [
        { label: 'Year', id: '1' },
        { label: 'Month', id: '2' },
        { label: 'Date', id: '3' },
        { label: 'Number Of Males', id: '4' },
        { label: 'Number Of Females', id: '5' },
        { label: 'Number Of New Borns', id: '6' },
        { label: 'Number  Of Deaths In The Month', id: '7' },
    ];

    return (
        <div>
            <Navbar/>
            <div className="table-container">
                <div className="header-title">
                    <h3>Population Records</h3>
                </div>
                <table>
                    <tbody>
                        <tr className="header-row" key={tableHeaders.id}>
                            {tableHeaders.map(tableHeader => <td><h6>{tableHeader.label}</h6></td>)}
                        </tr>
                        {population.map(populate => {
                            return (
                                <tr className="table-record-row" key={populate._id}>
                                    <td>{populate.year}</td>
                                    <td>{populate.month}</td>
                                    <td>{populate.recordDate}</td>
                                    <td>{populate.numberOfFemales}</td>
                                    <td>{populate.numberOfMales}</td>
                                    <td>{populate.numberOfNewborns}</td>
                                    <td>{populate.numberOfDeathsInMonth}</td>
                                    <td>
                                        <button onClick={() => dispatch(actionTypes.deletePopulation(populate._id))}>Delete Record</button>
                                    </td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
                <div className="phone-notify">
                    <h4>Please Login from a personal computer to access farming records</h4>
                </div>
            </div>
        </div>
    )
}


export default PopulationRecord
