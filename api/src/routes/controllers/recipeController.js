const axios = require('axios');
const {
    DB_API
} = process.env;
const { Recipe,Diet } = require("../../db")
const { Op } = require("sequelize");



const getRecipes = async () => {
    try {
    const apiData = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=5ded334b21f646bdb66cc1dd2afde66d&number=100&addRecipeInformation=true`)
    const apimap = await apiData.data.results.map(receta => ({
        id: receta.id,
        title: receta.title,
        image: receta.image,
        diets: receta.diets,
    }))
    const bdd = await Recipe.findAll({include:{model:Diet,through:{attributes:[]}}})
    const mapeobdd = bdd.map(receta => ({
        id: receta.id,
        title: receta.title,
        image: receta.image,
        diets: receta.diets?.map((e)=>e.diet),
        
    }))
    const result = [...mapeobdd, ...apimap]
    return result
    } catch (error) {
        const bdd = await Recipe.findAll({include:{model:Diet,through:{attributes:[]}}})
        const mapeobdd = bdd.map(receta => ({
            id: receta.id,
            title: receta.title,
            image: receta.image,
            diets: receta.diets?.map((e)=>e.diet),
        }))
        const result = [...mapeobdd]
        return result
    }
    

}

const queryRecipes = async (title) => {
    const result = await getRecipes()
    return result.filter(e => e.title.toLowerCase().includes(title.toLowerCase()))
}




const detailRecipe = async (id) => {
    const apiData = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=5ded334b21f646bdb66cc1dd2afde66d&number=100&addRecipeInformation=true`)
    const apimap = await apiData.data.results.map(receta => ({
        id: receta.id,
        title: receta.title,
        image: receta.image,
        diets: receta.diets,
        pricePerServing: receta.pricePerServing,
        sourceName: receta.sourceName,
        readyInMinutes: receta.readyInMinutes,
        healthScore: receta.healthScore,
        summary: receta.summary,
        cuisines: receta.cuisines,
        analyzedInstructions: receta.analyzedInstructions
    }))
    const bdd = await Recipe.findAll({include:{model:Diet,through:{attributes:[]}}}) 
    const mapeobdd = bdd.map(receta => ({
        id: receta.id,
        title: receta.title,
        image: receta.image,
        diets: receta.diets?.map((e)=>e.diet),
        pricePerServing: receta.pricePerServing,
        sourceName: receta.sourceName,
        readyInMinutes: receta.readyInMinutes,
        healthScore: receta.healthScore,
        summary: receta.summary,
        cuisines: receta.cuisines,
        analyzedInstructions: receta.analyzedInstructions,
    }))
    const result = [...mapeobdd, ...apimap]
    return result.find(e => (e.id == id))
}


const postRecipes =async (body) => {
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

module.exports = { getRecipes, detailRecipe, queryRecipes,postRecipes }