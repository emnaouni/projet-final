import { GET_MEDECINS } from "../actions/types";

const medecinReducer = (state = { medecins: [] ,text:"" }, action) => {
  switch (action.type) {
    case GET_MEDECINS:
      return { ...state, 
        medecins: action.payload }
    default:
      return state;
  }

}
export default medecinReducer;