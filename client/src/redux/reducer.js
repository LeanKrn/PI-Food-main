import { GET_RECIPES, GET_DIETS, CREATE_RECIPES } from "./actions";

const initialState = {
  recipes: [],
  diets: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
      };

    case GET_DIETS:
      return {
        ...state,
        diets: action.payload,
      };

    case CREATE_RECIPES:
      return {
        ...state,
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;