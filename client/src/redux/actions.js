export const GET_RECIPES = "GET_RECIPES";
export const GET_DIETS = "GET_DIETS";
export const CREATE_RECIPES = "CREATE_RECIPES";

export const getRecipes = () => {
    return async function (dispatch) {
        await axios.get("https://localhost:3001/food/recipes")
            .then((data) =>
                dispatch({ type: GET_RECIPES, payload: data.results })
            );
    }
};

export const getDiets = () => {
    return async function (dispatch) {
        await axios.get("https://localhost:3001/food/diets")
            .then((data) =>
                dispatch({ type: GET_DIETS, payload: data.results })
            );
    }
};

export const createRecipe = async (recipes) => {
    return async function (dispatch) {
        await axios.post('/https://localhost:3001/food/recipes', {
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
            .then((data) =>
                dispatch({ type: CREATE_RECIPES, payload: data.results })
            );
    }
};
//   .then(function (response) {
//     console.log(response);
//   })