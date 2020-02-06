import {SET_ALERT,REMOVE_ALERT} from './types'
import uuid from 'uuid'

export const setAlert =( msg, type ) =>{
    const id =uuid()
    return {
        type:SET_ALERT,
        payload:{msg, type, id}
    }

}
export const removeAlert= id =>{
    return {
        type: REMOVE_ALERT,
        payload:id
    }
}
