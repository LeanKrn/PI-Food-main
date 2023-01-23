import axios from "axios";
export const GET_RECIPES = "GET_RECIPES";
export const GET_DIETS = "GET_DIETS";
export const CREATE_RECIPES = "CREATE_RECIPES";

export const getRecipes = () => {
    return  function (dispatch) {
         axios.get("http://localhost:3001/recipes")
            .then(info =>
                dispatch({ type: GET_RECIPES, payload: info.data })
            );
            
    }
};

export const getDiets = () => {
    return async function (dispatch) {
        await axios.get("http://localhost:3001/diets")
            .then((info) =>
                dispatch({ type: GET_DIETS, payload: info.data })
            );
    }
};

export const createRecipe = async (recipes) => {
    return async function (dispatch) {
        await axios.post('http://localhost:3001/recipes', {
            id: recipes.id,
            title: recipes.title,
            image: recipes.image,
            diets: recipes.diets,
            pricePerServing: recipes.pricePerServing,
            sourceName: recipes.sourceName,
            readyInMinutes: recipes.readyInMinutes,
            healthScore: recipes.healthScore,
            summary: recipes.summary,
            cuisines: recipes.cuisines,
            analyzedInstructions: recipes.analyzedInstructions
        })
            .then((info) =>
                dispatch({ type: CREATE_RECIPES, payload: info.data })
            );
    }
};
//   .then(function (response) {
//     console.log(response);
//   })