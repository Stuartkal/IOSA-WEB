import React,{useEffect} from 'react'
import Navbar from '../../Routes/Navbar'
import {useDispatch, useSelector} from 'react-redux'
import * as actionTypes from '../../Store/ActionCreators'

import './record.scss'
const MedicationRecords = () => {

    const medication = useSelector(state => state.breeding.medication)
    console.log(medication,'medication')

    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(actionTypes.medication())
    },[])

    // console.log(population)

    const tableHeaders = [
        { label: 'Medication', id: '1' },
        { label: 'Medication Date', id: '2' },
        { label: 'Cage Number', id: '3' },
        { label: 'Gender', id: '4' },
        { label: 'Medication Type', id: '5' },
        { label: 'Remarks', id: '6' },
    ];

    return (
        <div>
            <Navbar/>
            <div className="table-container">
                <div className="header-title">
                    <h3>Medication Records</h3>
                </div>
                <table>
                    <tbody>
                        <tr className="header-row" key={tableHeaders.id}>
                            {tableHeaders.map(tableHeader => <td><h6>{tableHeader.label}</h6></td>)}
                        </tr>
                        {medication.map(medicate => {
                            return (
                                <tr className="table-record-row" key={medicate._id}>
                                    <td>{medicate._medication}</td>
                                    <td>{medicate.medicationDate}</td>
                                    <td>{medicate.cageNumber}</td>
                                    <td>{medicate.gender}</td>
                                    <td>{medicate.medicationType}</td>
                                    <td>{medicate.remarks}</td>
                                    <td>
                                        <button onClick={() => dispatch(actionTypes.deleteMedication(medicate._id))}>Delete Record</button>
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

export default MedicationRecords
