const { Router } = require('express');
const recipes = Router();
const { getRecipes, detailRecipe, queryRecipes,postRecipes } = require("./controllers/recipeController")
//    fetch(`https://api.spoonacular.com/recipes/complexSearch`)
// .then((data) => data) ${DB_API}

recipes.get('/', async ({ query }, res) => {
    try {
        let recipes = []
        if (query.title) {
            recipes = await queryRecipes(query.title)
        } else {
            recipes = await getRecipes()
            console.log("aaaa");
        }
        res.status(200).json(recipes)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
});


recipes.get('/:id', async ({ params }, res) => {
    try {
        const characters = await detailRecipe(params.id)
        res.status(200).json(characters)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
});

recipes.post("/", async ({ body }, res) => {
    try {
        const results = await postRecipes(body)
        res.status(200).json(results)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
})

module.exports = recipes



       