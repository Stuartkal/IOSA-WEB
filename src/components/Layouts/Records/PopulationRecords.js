import React,{useEffect} from 'react'
import Navbar from '../../Routes/Navbar'
import {connect, useSelector} from 'react-redux'
import * as actionTypes from '../../Store/ActionCreators'

import './record.scss'
const PopulationRecord = (props) => {

    const population = useSelector(state => state.breeding.population)

    useEffect(()=> {
        props.getPopulation()
    },[])

    console.log(population)

    const tableHeaders = [
        { label: 'No. Of Newborns', id: '1' },
        { label: 'No. Of Deaths', id: '2' },
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
                        {population.map(populate => {
                            return (
                                <tr className="table-record-row" key={populate._id}>
                                    <td>{populate.numberOfNewborns}</td>
                                    <td>{populate.numberOfDeaths}</td>
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
    getPopulation: () => dispatch(actionTypes.getPopulation()),
})

export default connect(null, mapDispatchToProps) (PopulationRecord)
