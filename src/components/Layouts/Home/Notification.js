import React,{useEffect, useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import Breeding from './Breeding'
import Weaning from './Weaning'
import Kindling from './KindlingBox'
import * as actionCreators from '../../Store/ActionCreators'

import './home.scss'
import KindlingBox from './KindlingBox'
const Notification = () => {

    const dispatch = useDispatch()
 
    const kindlingBox = useSelector(state => state.notification.kindlingBox)
    const weaning = useSelector(state => state.notification.weaning)
    const breeding = useSelector(state => state.notification.nextBreeding)

    // console.log('breeding',breeding)
    // console.log('weaning',weaning)
    // console.log('kindling',kindlingBox)
    let notify;

    if(kindlingBox.length === 0 && weaning === 0 && breeding.length === 0){
        notify = <h3>No notificatins Yet</h3>
    }

    const dispatchHandler = useCallback(()=>{
        dispatch(actionCreators.kindlingBox())
        dispatch(actionCreators.weaningDate())
        dispatch(actionCreators.nextBreedingDate())
    },[])

    useEffect(()=>{
        dispatchHandler()
    },[dispatch])

    

    return (
        <div className="notification-main">
            <Kindling kindlingBox ={kindlingBox}/>
            <Weaning weaning ={weaning}/>
            <Breeding breeding ={breeding}/>
            {notify}
        </div>
    )
}

export default Notification
