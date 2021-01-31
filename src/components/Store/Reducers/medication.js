import * as actionTypes from '../Action'
import {updateObject} from './utility'


const intitialState = {
    kindlingBox:[],
    weaning:[],
    nextBreeding:[],
}

const medication = (state = intitialState, action) => {
    switch(action.type){
            case actionTypes.GET_KINDLINGBOX_SUCCESS:
            return updateObject(state, {
                kindlingBox: action.kindling
            })

            case actionTypes.GET_WEANINGDATE_SUCCESS:
            return updateObject(state, {
                weaning: action.weaning
            })

            case actionTypes.GET_NEXTBREEDINGDATE_SUCCESS:
                return updateObject(state, {
                    nextBreeding: action.nextBreeding
                })
           

        default: return state
    }
}

export default medication

