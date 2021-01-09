import React,{useEffect} from 'react'
import Navbar from '../../Routes/Navbar'
import {connect, useSelector} from 'react-redux'
import * as actionTypes from '../../Store/ActionCreators'

import './record.scss'
const BreedingRecords = (props) => {

    const breedings = useSelector(state => state.breeding.breedings)

    useEffect(()=> {
        props.getBreeding()
    },[])

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
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    getBreeding: () => dispatch(actionTypes.getBreeding()),
})

export default connect(null, mapDispatchToProps) (BreedingRecords)
