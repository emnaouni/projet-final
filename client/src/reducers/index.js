import {combineReducers} from 'redux'
import medecinReducer from '../reducers/medecinReducer'
import listMedicamentsReducer from '../reducers/listMedicamentsReducer'

export default combineReducers({medecinReducer,listMedicamentsReducer})