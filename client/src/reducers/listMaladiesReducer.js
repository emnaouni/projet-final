import { GET_MALADIES } from "../actions/types";

const listMalaidesReducer = (state ={maladies:[]}, action) => {
  switch (action.type) {
    case GET_MALADIES:
      return { ...state, 
        maladies: action.payload }
    default:
      return state;
  }

}
export default listMalaidesReducer;