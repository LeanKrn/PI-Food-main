const axios = require('axios');
const { Recipe, Diet } = require("../../db")
const { Op } = require("sequelize");
const { apiDataReady,dbbDataReady,apiDataSimple,mapeobddSimple } = require( './Funcs');


const getRecipes = async () => {
    try {
        const apiData = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.DB_API}&number=100&addRecipeInformation=true`)
        const apimap = apiDataSimple(apiData)
        const bdd = await Recipe.findAll({ include: { model: Diet, through: { attributes: [] } } })
        const mapeobdd = mapeobddSimple(bdd)
        const result = [...mapeobdd, ...apimap]
        return result
    } catch (error) {
        const bdd = await Recipe.findAll({ include: { model: Diet, through: { attributes: [] } } })
        const mapeobdd = mapeobddSimple(bdd)
        const result = [...mapeobdd]
        return result
    }


}

const queryRecipes = async (title) => {
    const result = await getRecipes()
    return result.filter((e) => e.title.toLowerCase().includes(title.toLowerCase()))
}




const detailRecipe = async (id) => {
    try {
        const apiData = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.DB_API}&number=100&addRecipeInformation=true`)
        const apimap = apiDataReady(apiData)
        const bdd = await Recipe.findAll({ include: { model: Diet, through: { attributes: [] } } })
        const mapeobdd = dbbDataReady(bdd)
        const result = [...mapeobdd, ...apimap]
        return result.find(e => (e.id == id))
    } catch (error) {
        const bdd = await Recipe.findAll({ include: { model: Diet, through: { attributes: [] } } })
        const mapeobdd = dbbDataReady(bdd)
        const result = [...mapeobdd]
        return result.find(e => (e.id == id))
    }

}


const postRecipes = async (body) => {
    const {
        id,
        title,
        readyInMinutes,
        pricePerServing,
        diets,
        sourceName,
        image,
        healtScore,
        summary,
        cuisines,
        analyzedInstructions
    } = body
    const newRecipe = await Recipe.create({
        id,
        title,
        readyInMinutes,
        pricePerServing,
        sourceName,
        image,
        healtScore,
        summary,
        cuisines,
        analyzedInstructions
    })
    newRecipe.addDiets(diets)
}

module.exports = { getRecipes, detailRecipe, queryRecipes, postRecipes }