import axios from "axios"
import {GET_MEDECINS} from './types'

export const getmedecins = () => dispatch => {
    return axios
      .get('/personne/medecin')
      .then(res => 
        dispatch({
          type: GET_MEDECINS,
          payload: res.data
        })
      );
  };