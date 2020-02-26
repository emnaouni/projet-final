import axios from "axios"
import { ADD_DOSSIER, ERROR_DOSSIER,GET_DOSSIER, CLEAR_DOSSIER} from './types'


export const addDossierMedical= () => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    axios.post('/dossiermedical', config)
        .then(res => dispatch({
            type: ADD_DOSSIER,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: ERROR_DOSSIER,
            payload: err.response.msg
        }))
    
}


export const GetDossierMedicalPatient= (id) => dispatch => {
    axios.get(`/dossiermedical/patient/${id}`)
        .then(res => dispatch({
            type: GET_DOSSIER,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: ERROR_DOSSIER,
            payload: err.response.msg
        }))
    
}

export const clearDossier = () => dispatch => {
    dispatch({
        type: CLEAR_DOSSIER
    })
}