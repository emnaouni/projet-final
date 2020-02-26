import { ADD_DOSSIER, ERROR_DOSSIER, GET_DOSSIER, CLEAR_DOSSIER } from "../actions/types";
const initialState = {
  dossiermedical: {},
  saved: null,
  error: null
}
const DossierReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DOSSIER:
      return {
        ...state,
        dossiermedical: action.payload
      }
    case GET_DOSSIER:
      return {
        ...state,
        dossiermedical: action.payload
      }
    case ERROR_DOSSIER:
      return {
        ...state,
        error: action.payload
      }
    case CLEAR_DOSSIER:
      return {
        ...state,
        dossiermedical: {}
      }
    default:
      return state;
  }

}
export default DossierReducer;