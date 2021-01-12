import React,{useEffect} from 'react'
import Navbar from '../../Routes/Navbar'
import Card from './Card'
import BreedingIcon from '../../../assets/images/breeding.png'
import MedicationIcon from '../../../assets/images/medication.png'
import BookKeepingIcon from '../../../assets/images/bookkeeping.png'
import StockManagementIcon from '../../../assets/images/stock.png'
import PopulationRecordIcon from '../../../assets/images/population.png'
import ReactNotification from 'react-notifications-component'
import {store} from 'react-notifications-component'
import moment from 'moment'
import 'react-notifications-component/dist/theme.css'

import './home.scss'
const Home = (props) => {

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

    useEffect(()=>{

            const scheduleddate =  new Date().setDate(new Date().getDate())
            const diff = moment(new Date()) >= moment(scheduleddate)

            // console.log(diff)
            
            if(diff){
                store.addNotification({
                    title: "Medication Reminder",
                    message: "Today is breeding Day!",
                    type: "success",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 2678400,
                        showIcon: true,
                        onScreen: true
                    }
                })
            }
    },[])

    return (
        <div>
            <Navbar/>
            <ReactNotification/>
            <div className="home-main">
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
                        title="Stock Management"
                        icon={StockManagementIcon}
                    />
                    <Card
                        title="Population Record"
                        icon={PopulationRecordIcon}
                        navigate={handlePopulationClick} 
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
