import axios from "axios"
import {GET_PATIENT} from './types'

export const getpatients = () => dispatch => {
    return axios
      .get('/personne/patient')
      .then(res => 
        dispatch({
          type: GET_PATIENT,
          payload: res.data
        })
      );
  };

  export const deletepatients = (id) => dispatch => {
    axios
      .delete(`/personne/${id}`)
      .then(
        dispatch(getpatients())
      );
  };