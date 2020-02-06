import axios from "axios"
import { SUCCES_LOGIN, FAILED_LOGIN, SUCCES_REGISTER, FAILED_REGISTER, AUTH_ERROR, CLEAR_ERROR, LOGOUT} from './types'

//login
  export const login = newLogin=> dispatch => {
    axios.post('/auth', newLogin).then(res => {
        dispatch()
    })
}
