import {combineReducers} from 'redux'
import medecinReducer from '../reducers/medecinReducer'
import authReducer from '../reducers/authReducers'
import alertReducer from '../reducers/AlertReducer'
export default combineReducers({medecin:medecinReducer,auth:authReducer, alert:alertReducer})