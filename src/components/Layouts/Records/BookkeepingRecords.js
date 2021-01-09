import React,{useEffect} from 'react'
import Navbar from '../../Routes/Navbar'
import {connect, useSelector} from 'react-redux'
import * as actionTypes from '../../Store/ActionCreators'

import './record.scss'
const BookkeepingRecords = (props) => {

    const bookkeeping = useSelector(state => state.breeding.bookkeeping)

    useEffect(()=> {
        props.getBookKeeping()
    },[])

    console.log(bookkeeping)

    const tableHeaders = [
        { label: 'Food', id: '1' },
        { label: 'Medication', id: '2' },
        { label: 'Salaries', id: '3' },
        { label: 'Allowances', id: '4' },
        { label: 'Miscellaneous', id: '5' },
        { label: 'Animals Bought', id: '6' },
        { label: 'Rabbit Sales', id: '7' },
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
    getBookKeeping: () => dispatch(actionTypes.getBookKeeping())
})

export default connect(null, mapDispatchToProps) (BookkeepingRecords)
