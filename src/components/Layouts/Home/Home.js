import React,{useEffect} from 'react'
import Navbar from '../../Routes/Navbar'
import Card from './Card'
import StatCard from './StatCard'
import Notification from './Notification'
import BreedingIcon from '../../../assets/images/breeding.png'
import MedicationIcon from '../../../assets/images/medication.png'
import BookKeepingIcon from '../../../assets/images/bookkeeping.png'
import StockManagementIcon from '../../../assets/images/stock.png'
import PopulationRecordIcon from '../../../assets/images/population.png'

import {useDispatch} from 'react-redux'
import * as actionTypes from '../../Store/ActionCreators'

import './home.scss'
const Home = (props) => {

    const dispatch = useDispatch()

    useEffect(() => {
        
    },[dispatch])

    const handleBreedingClick = () => {
        setTimeout(()=>{
            props.history.push('/breeding')
        },1000)
    } 

    const handlePopulationClick = () => {
        setTimeout(()=>{
            props.history.push('/population-record')
        },1000)
    }

    const handleBookClick = () => {
        setTimeout(()=>{
            props.history.push('/book-keeping')
        },1000)
    }

    const handleMedicationClick = () => {
        setTimeout(()=>{
            props.history.push('/medication')
        },1000)
    }

    const handleStockManagementClick = () => {
        setTimeout(() => {
            props.history.push('/stock-management')
        },1000)
    }


    return (
        <div>
            <Navbar/>
            <div className="home-main">
                <div className="home-container">
                    <div className="main-column">
                        <div className="home-row">
                            <Card
                                title="Breeding"
                                icon={BreedingIcon} 
                                navigate={handleBreedingClick} 
                            />
                            <Card
                                title="Medication"
                                icon={MedicationIcon}
                                navigate={handleMedicationClick} 
                            />
                            <Card
                                title="Book Keeping"
                                icon={BookKeepingIcon}
                                navigate={handleBookClick}
                            />
                            <Card
                                title="Population Record"
                                icon={PopulationRecordIcon}
                                navigate={handlePopulationClick} 
                            />
                            <Card
                                title="Stock Management"
                                icon={StockManagementIcon}
                                navigate={handleStockManagementClick}
                            />
                        </div>
                        <div className="stats-row">
                            <StatCard
                                title="Total Rabbits on farm"
                                figure="0"
                            />
                            <StatCard
                                title="Total Deaths"
                                figure="0"
                            />
                            <StatCard
                                title="Total Rabbits sold"
                                figure="0"
                            />
                            <StatCard
                                title="Total Rabbit sales revenue"
                                figure="0"
                            />
                            <StatCard
                                title="Total Feeds Expenditure"
                                figure="0"
                            />
                            <StatCard
                                title="Total Medicine Expenditure"
                                figure="0"
                            />
                        </div>
                    </div>
                    <div className="notification-column">
                        <div className="notification-header">
                            <h4>Notifications</h4>
                        </div>
                        <Notification/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
