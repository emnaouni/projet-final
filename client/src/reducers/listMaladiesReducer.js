// import { GET_MALADIES } from "../actions/types";

const listMaladiesReducer = (state ={maladies:[]}, action) => {
  switch (action.type) {
    case "GET_MALADIES":
      return { ...state, maladies:action.payload }
    default:
      return state;
  }

}
export default listMaladiesReducer;