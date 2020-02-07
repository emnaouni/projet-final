import axios from "axios"
import { SUCCES_LOGIN, FAILED_LOGIN, SUCCES_REGISTER, FAILED_REGISTER, AUTH_ERROR, CLEAR_ERROR, LOGOUT, USER_LOADED} from './types'
import setAuthToken from '../utils/setAuthToken'


//user Loaded
export const loadUser= ()=> dispatch =>{
  //SET the token inside the request's header
  if(localStorage.token){
    setAuthToken(localStorage.token)
  }
  axios.get('/auth')
  .then(res=>dispatch({
    type:USER_LOADED,
    payload:res.data
  }))
  .catch(()=>dispatch({
    type:AUTH_ERROR
  }))
}
//Sinscrire
  export const registerPatient = newPatient=> dispatch => {
    const config = {
      headers:{
        'Content-Type':'application/json'
      }
    }
    axios.post('/personne', newPatient, config)
    .then(res => {
        dispatch({
          type:SUCCES_REGISTER,
          payload:res.data
        })
        dispatch(loadUser())
    })
    .catch(err => dispatch({
      type:FAILED_REGISTER,
      payload: err
    }))
}
//login user

export const LoginPatient = newlogin=> dispatch => {
  const config = {
    headers:{
      'Content-type':'application/json'
    }
  }
  axios.post('/auth', newlogin, config)
  .then(res => {
      dispatch({
        type:SUCCES_LOGIN,
        payload:res.data
      })
      dispatch(loadUser())
  })
  .catch( err => dispatch({
    type:FAILED_LOGIN,
    payload:err.response.data.msg
  }))
}
//logout
export const logout =() => dispatch=>{
  dispatch({
    type:LOGOUT
  })
}
//Clear erorr
export const ClearError=() => dispatch=>
dispatch({
    type:CLEAR_ERROR
  })


