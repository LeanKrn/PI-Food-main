import axios from "axios";
export const GET_RECIPES = "GET_RECIPES";
export const GET_DIETS = "GET_DIETS";
export const CREATE_RECIPES = "CREATE_RECIPES";
export const GET_DETAIL = "GET_DETAIL";

export const getRecipes = () => {
    return async function (dispatch) {
        await axios.get("http://localhost:3001/recipes")
            .then(info =>
                dispatch({ type: GET_RECIPES, payload: info.data })
            );

    }
};

export const getRecipesByName = (name) => {
    return async function (dispatch) {
        await axios.get(`http://localhost:3001/recipes?title=${name}`)
            .then(info =>
                dispatch({ type: GET_RECIPES, payload: info.data })
            );

    }
};

export const getRecipesById = (id) => {
    return async function (dispatch) {
        await axios.get(`http://localhost:3001/recipes/${id}`)
            .then(info =>
                dispatch({ type: GET_DETAIL, payload: info.data })
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

export const createRecipe = (recipes) => {
    return async function (dispatch) {
        const response = await axios.post('http://localhost:3001/recipes', recipes)
        return response
    }
};
//   .then(function (response) {
//     console.log(response);
//   })