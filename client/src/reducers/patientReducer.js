import { GET_PATIENT } from "../actions/types";

const patientReducer = (state = { patients: [] }, action) => {
  switch (action.type) {
    case GET_PATIENT:
      return { ...state, patients: action.payload }
    default:
      return state;
  }

}
export default patientReducer;