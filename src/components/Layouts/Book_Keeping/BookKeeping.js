import React, { useState } from 'react'
import Navbar from '../../Routes/Navbar'
import Form from './Form'
import { connect } from 'react-redux'
import * as actionCreators from '../../Store/ActionCreators'

import './book.scss'
const BookKeeping = (props) => {

    const [state, setState] = useState({
        food: '',
        medication: '',
        salaries: '',
        allowances: '',
        miscellaneous: '',
        animalsBought: '',
        rabbitSales: '',
        farmVisits: '',
        foodSales: '',
        stockFood: '',
        stockAnimals: '',
        stockMedication: '',
        error: ''
    })


    const expenditure = parseInt(state.food) + parseInt(state.medication) + parseInt(state.salaries) + parseInt(state.allowances) + parseInt(state.miscellaneous) + parseInt(state.animalsBought)
    const gross_revenue = parseInt(state.rabbitSales) + parseInt(state.farmVisits) + parseInt(state.foodSales) + parseInt(state.stockFood) + parseInt(state.stockAnimals) + parseInt(state.stockMedication)
    const net_revenue = gross_revenue - expenditure


    const addBookKeepingHandler = (e) => {
        e.preventDefault()
        props.postRevenue(expenditure, gross_revenue, net_revenue)
        props.addBookKeeping(
            state.food,
            state.medication,
            state.salaries,
            state.allowances,
            state.miscellaneous,
            state.animalsBought,
            state.rabbitSales,
            state.farmVisits,
            state.foodSales,
            state.stockFood,
            state.stockAnimals,
            state.stockMedication,
            (res) => {
                if (res.success === true) {
                    setState({
                        food: '',
                        medication: '',
                        salaries: '',
                        allowances: '',
                        miscellaneous: '',
                        animalsBought: '',
                        rabbitSales: '',
                        farmVisits: '',
                        foodSales: '',
                        stockFood: '',
                        stockAnimals: '',
                        stockMedication: '',
                        error: 'Record Added!'
                    })
                }
                if (res.success === false) {
                    setState({ error: 'Invalid Input, Please enter all fields' })
                }
            }
        )
    }

    return (
        <div>
            <Navbar />
            <Form
                food={state.food}
                medication={state.medication}
                salaries={state.salaries}
                allowances={state.allowances}
                miscellaneous={state.miscellaneous}
                animalsBought={state.animalsBought}
                rabbitSales={state.rabbitSales}
                farmVisits={state.farmVisits}
                foodSales={state.foodSales}
                stockFood={state.stockFood}
                stockAnimals={state.stockAnimals}
                stockMedication={state.stockMedication}
                error={state.error}
                onChange={(field, value) => setState({ ...state, [field]: value })}
                addBookkeeping={addBookKeepingHandler}
            />
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    postRevenue: (expenditure, gross_revenue, net_revenue) => dispatch(actionCreators.postRevenue(expenditure, gross_revenue, net_revenue)),
    addBookKeeping: (
        food,
        medication,
        salaries,
        allowances,
        miscellaneous,
        animalsBought,
        rabbitSales,
        farmVisits,
        foodSales,
        stockFood,
        stockAnimals,
        stockMedication,
        callback
    ) => dispatch(actionCreators.addBookKeeping(
        food,
        medication,
        salaries,
        allowances,
        miscellaneous,
        animalsBought,
        rabbitSales,
        farmVisits,
        foodSales,
        stockFood,
        stockAnimals,
        stockMedication,
        callback
    ))
})

export default connect(null, mapDispatchToProps)(BookKeeping)
