import { GET_RECIPES, GET_DIETS, CREATE_RECIPES } from "./actions";

const initialState = {
  recipes: [],
  diets: [],
};

const rootReducer = (state = initialState, {payload,type}) => {
  switch (type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: payload,
      };

    case GET_DIETS:
      return {
        ...state,
        diets: payload,
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