import axios from "axios"
import {GET_MEDICAMENTS} from './types'

export const getmedicaments = () => dispatch => {
    return axios
      .get('/medicaments')
      .then(res => 
        dispatch({
          type: GET_MEDICAMENTS,
          payload: res.data
        })
      );
  };

  export const addmedicaments = (newMedicament) => dispatch => {
    axios
      .post("/medicaments" , newMedicament)
      .then(
        dispatch(getmedicaments())
      );
  };


  export const deletemedicaments = (id) => dispatch => {
    axios
      .delete(`/medicaments/${id}`)
      .then(
        dispatch(getmedicaments())
      );
  };
  

  export const updatemedicaments = (id, newMedicament) => dispatch => {
    axios
    .put(`/medicaments/${id}`, newMedicament)
    .then(dispatch(getmedicaments()));
  };
  