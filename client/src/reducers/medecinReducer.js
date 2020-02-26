import { GET_MEDECINS,GET_RDV ,GET_PATIENT} from "../actions/types";

const medecinReducer = (state = { medecins: [] ,nom:"",specialite:"",adresseCabinet:" ",OnePatient:{} }, action) => {
  switch (action.type) {
    case GET_MEDECINS:
      return { ...state, 
        medecins: action.payload }
      case GET_PATIENT:
        return{...state,
        OnePatient:action.payload
        }
    default:
      return state;
  }

}
export default medecinReducer;