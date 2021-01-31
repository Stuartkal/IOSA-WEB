import React,{useEffect,useState} from 'react'
import Navbar from '../../Routes/Navbar'
import {useDispatch, useSelector} from 'react-redux'
import * as actionTypes from '../../Store/ActionCreators'

import './record.scss'
const BreedingRecords = () => {

    const breedings = useSelector(state => state.breeding.breedings) 
    
    const dispatch = useDispatch()

    useEffect(()=> {
     dispatch(actionTypes.getBreeding())  
    },[dispatch])


    console.log(breedings)

    const tableHeaders = [
        { label: 'Breed', id: '1' },
        { label: 'Date Of Birth', id: '2' },
        { label: 'Gender', id: '3' },
        { label: 'Parent', id: '4' },
        { label: 'Female Cage No.', id: '5' },
        { label: 'Male Cage No.', id: '6' },
        { label: 'Breeding Date', id: '7' },
        { label: 'Kindling Box', id: '8' },
        { label: 'Kindling Date', id: '9' },
        { label: 'Number Alive', id: '10' },
        { label: 'Number Dead', id: '11' },
        { label: 'Weaning Date', id: '12' },
        { label: 'Next Breeding Date', id: '13' }
    ];

    return (
        <div>
            <Navbar/>
            <div className="table-container">
                <div className="header-title">  
                    <h2>Breeding Records</h2>
                </div>
                <table>
                    <tbody>
                        <tr className="header-row" key={tableHeaders.id}>
                            {tableHeaders.map(tableHeader => <td><h6>{tableHeader.label}</h6></td>)}
                        </tr>
                        {breedings.map(breeding => {
                            return (
                                <tr className="table-record-row" key={breeding._id}>
                                    <td>{breeding.breed}</td>
                                    <td>{breeding.dateOfBirth}</td>
                                    <td>{breeding.gender}</td>
                                    <td>{breeding.parent}</td>
                                    <td>{breeding.femaleCageNumber}</td>
                                    <td>{breeding.maleCageNumber}</td>
                                    <td>{breeding.breedingDate}</td>
                                    <td>{breeding.kindlingBox}</td>
                                    <td>{breeding.kindlingDate}</td>
                                    <td>{breeding.numberAlive}</td>
                                    <td>{breeding.numberDead}</td>
                                    <td>{breeding.weaningDate}</td>
                                    <td>{breeding.nextBreedingDate}</td>
                                    <td>
                                        <button onClick={() => dispatch(actionTypes.deleteBreeding(breeding._id))}>Delete Record</button>
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



export default BreedingRecords
