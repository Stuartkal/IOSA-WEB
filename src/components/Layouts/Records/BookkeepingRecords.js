import React,{useEffect} from 'react'
import Navbar from '../../Routes/Navbar'
import {useDispatch, useSelector} from 'react-redux'
import * as actionTypes from '../../Store/ActionCreators'

import './record.scss'
import { act } from 'react-dom/test-utils'
const BookkeepingRecords = () => {

    const bookkeeping = useSelector(state => state.breeding.bookkeeping)

    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(actionTypes.getBookKeeping())
    },[dispatch])

    // console.log(bookkeeping)

    const tableHeaders = [
        { label: 'Food', id: '1' },
        { label: 'Medication', id: '2' },
        { label: 'Salaries', id: '3' },
        { label: 'Allowances', id: '4' },
        { label: 'Miscellaneous', id: '5' },
        { label: 'Animals Bought', id: '6' },
        { label: 'Rabbit Sold', id: '7' },
        { label: 'Farm Visits', id: '8' },
        { label: 'Food Sales', id: '9' },
        { label: 'Stock Food', id: '10' },
        { label: 'Stock Animals', id: '11' },
        { label: 'Stock Medication', id: '12' },
    ];

    return (
        <div>
            <Navbar/>
            <div className="table-container">
                <div className="header-title">
                    <h3>Book Keeping Records</h3>
                </div>
                <table>
                    <tbody>
                        <tr className="header-row" key={tableHeaders.id}>
                            {tableHeaders.map(tableHeader => <td><h6>{tableHeader.label}</h6></td>)}
                        </tr>
                        {bookkeeping.map(book => {
                            return (
                                <tr className="table-record-row" key={book._id}>
                                    <td>{book.food}</td>
                                    <td>{book.medication}</td>
                                    <td>{book.salaries}</td>
                                    <td>{book.allowances}</td>
                                    <td>{book.miscellaneous}</td>
                                    <td>{book.animalsBought}</td>
                                    <td>{book.rabbitSales}</td>
                                    <td>{book.farmVisits}</td>
                                    <td>{book.foodSales}</td>
                                    <td>{book.stockFood}</td>
                                    <td>{book.stockAnimals}</td>
                                    <td>{book.stockMedication}</td>
                                    <td>
                                        <button onClick={() => dispatch(actionTypes.deleteBookkeeping(book._id))}>Delete Record</button>
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


export default BookkeepingRecords
