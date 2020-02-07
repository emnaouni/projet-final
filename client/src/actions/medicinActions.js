import axios from "axios"
import {GET_MEDECINS,GET_ADRESSECAB,GET_NAME,GET_SPECIALITE} from './types'

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







  
  export const getNom=(nom)=>{
    return {
           type: GET_NAME,
            payload: nom
    }
  }
  export const getSpecialite=(specialite)=>{
    return {
           type: GET_SPECIALITE,
            payload: specialite
    }
  }
  export const getAdresseCabinet=(AdresseCabinet)=>{
    return {
           type: GET_ADRESSECAB,
            payload: AdresseCabinet
    }
  }