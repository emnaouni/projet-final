import axios from "axios"
import { GET_MEDECINS, GET_ADRESSECAB, GET_NAME, GET_SPECIALITE, GET_RDV, GET_PATIENT ,GET_ONEPATIENT} from './types'
import { GetDossierMedicalPatient } from './dossierMAction'

export const deletemedecins = (id) => dispatch => {
  axios
    .delete(`/personne/${id}`)
    .then(
      dispatch(getmedecins())
    );
};

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
export const getPatientId = (CIN) => dispatch => {
  return axios
    .get(`/personne/patienDossier/${CIN}`)
    .then(res =>{
      dispatch({
        type: GET_PATIENT,
        payload: res.data
      }); 
    console.log(res.data._id)
    dispatch(GetDossierMedicalPatient(res.data._id))}
    )
};

// //GET Patient par ID
// export const getPatient = (id) => dispatch => {
//   return axios
//     .get(`/personne/patienDossierr/${id}`)
//     .then(res =>
//       dispatch({
//         type: GET_PATIENT,
//         payload: res.data
//       })
//     );
// };

//upDate RDV
export const UpdateRdv = (id, rdv) => dispatch => {
  return axios
    .put(`/personne/Rdvpatient/${id}`, rdv)
    .then(res =>
      dispatch(getmedecins())
    );
};
//GET Liste RDV /Medecin
export const getRDV = (id) => dispatch => {
  return axios
    .get(`/personne/rdv/${id}`)
    .then(res =>
      dispatch({
        type: GET_RDV,
        payload: res.data
      })
    );
};


// export const getNom = (nom) => {
//   return {
//     type: GET_NAME,
//     payload: nom
//   }
// }
export const getSpecialite = (specialite) => {
  return {
    type: GET_SPECIALITE,
    payload: specialite
  }
}
export const getAdresseCabinet = (AdresseCabinet) => {
  return {
    type: GET_ADRESSECAB,
    payload: AdresseCabinet
  }
}
  // export const getAdresseCabinet=(AdresseCabinet)=>{
  //   return {
  //          type: GET_ADRESSECAB,
  //           payload: AdresseCabinet
  //   }
  // }


 