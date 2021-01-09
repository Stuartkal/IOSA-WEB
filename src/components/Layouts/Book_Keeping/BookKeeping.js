import React,{useState} from 'react'
import Navbar from '../../Routes/Navbar'
import Form from './Form'
import {connect} from 'react-redux'
import * as actionCreators from '../../Store/ActionCreators'

import './book.scss'
const BookKeeping = (props) => {

    const [state, setState] = useState({
            food:'',
            medication:'',
            salaries:'',
            allowances:'',
            miscellaneous:'',
            animalsBought:'', 
            rabbitSales:'',
            farmVisits:'', 
            foodSales:'',
            stockFood:'',
            stockAnimals:'',
            stockMedication:''
    })


    const addBookKeepingHandler = (e) => {
        e.preventDefault()
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
            state.stockMedication
        )
    }

    return (
        <div>
            <Navbar/>
            <Form
                food = {state.food}
                medication = {state.medication}
                salaries = {state.salaries}
                allowances = {state.allowances}
                miscellaneous = {state.miscellaneous}
                animalsBought = {state.animalsBought}
                rabbitSales = {state.rabbitSales}
                farmVisits = {state.farmVisits} 
                foodSales = {state.foodSales}
                stockFood = {state.stockFood}
                stockAnimals = {state.stockAnimals}
                stockMedication = {state.stockMedication}
                onChange={(field, value) => setState({...state, [field]: value})}
                addBookkeeping={addBookKeepingHandler}
            />
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
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
    ))
})

export default connect(null, mapDispatchToProps) (BookKeeping)
