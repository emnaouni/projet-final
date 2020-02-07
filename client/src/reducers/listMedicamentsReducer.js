import { GET_MEDICAMENTS } from "../actions/types";

const listMedicamentsReducer = (state ={medicaments:[]}, action) => {
  switch (action.type) {
    case GET_MEDICAMENTS:
      return { ...state, 
        medicaments: action.payload }
    default:
      return state;
  }

}
export default listMedicamentsReducer;