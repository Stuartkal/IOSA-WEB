import React,{useEffect} from 'react'
import Navbar from '../../Routes/Navbar'
import {useSelector,connect} from 'react-redux'
import {store} from 'react-notifications-component'
import * as actionCreators from '../../Store/ActionCreators'
import ReactNotification from 'react-notifications-component'
import moment from 'moment'
import 'react-notifications-component/dist/theme.css'

import './Medication.scss'
const Medication = (props) => {

    const breedings = useSelector(state => state.breeding.breedings)
    
    useEffect(()=>{

        // console.log(breedings)
        // breedings.map(breeding => {
        //     const scheduleddate =  moment(breeding.breedingDate)
        // const diff = moment(new Date()) >= moment(scheduleddate)

        // console.log(diff)
        
        // if(diff){
        //     store.addNotification({
        //         content: MyNotify,
        //         type: "success",
        //         insert: "top",
        //         container: "top-right",
        //         animationIn: ["animate__animated", "animate__fadeIn"],
        //         animationOut: ["animate__animated", "animate__fadeOut"],
        //         dismiss: {
        //             duration: 2678400,
        //             showIcon: true,
        //             onScreen: true
        //           }
        //       })
        // }
        // })
        
    },[breedings])

    useEffect(() => {
        props.getBreeding()
    },[])

    console.log(breedings.breedingDate)

    function MyNotify () {
        return (
            <div className="notify">
                <h3>Today is breeding Date for</h3>
                <h4>{breedings.gender}</h4>
            </div>
        )
    }


    return (
        <div>
            <Navbar/>
            <ReactNotification/>
            <div className="medication-main">
                    {breedings.map(breeding => {
                        console.log('database date',breeding.breedingDate)
                        console.log('todays date',moment(new Date()).format('DD-MM-YYYY'))
                        
                        const scheduleddate =  new Date().setDate(breeding.breedingDate)
                        const diff = moment(new Date()) >= moment(scheduleddate)

                        // console.log(diff)
                        
                        if(diff){
                            store.addNotification({
                                content: MyNotify,
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
                    })}
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    getBreeding: () => dispatch(actionCreators.getBreeding()),
})

export default connect(null, mapDispatchToProps) (Medication)
