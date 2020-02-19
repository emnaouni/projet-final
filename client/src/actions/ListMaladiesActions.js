import axios from "axios"
import {GET_MALADIES} from './types'

export const getmaladies = () => dispatch => {
    return axios
      .get('/maladies')
      .then(res => 
        dispatch({
          type: GET_MALADIES,
          payload: res.data
        })
      );
  };

  export const addmaladies = (newMaladie) => dispatch => {
    axios
      .post("/maladies" , newMaladie)
      .then(
        dispatch(getmaladies())
      );
  };


  export const deletemaladies = (id) => dispatch => {
    axios
      .delete(`/maladies/${id}`)
      .then(
        dispatch(getmaladies())
      );
  };
  
  export const updatemaladies = (id, newMaladie) => dispatch => {
    axios
    .put(`/maladies/${id}`, newMaladie)
    .then(dispatch(getmaladies()));
  };
  
