const { Diet } = require("../../db")


const getDiets = async () => {
    // const diets = [
    //     "Gluten Free",
    //     "Ketogenic",
    //     "Vegetarian",
    //     "Lacto-Vegetarian",
    //     "Ovo-Vegetarian",
    //     "Vegan",
    //     "Pescetarian",
    //     "Paleo",
    //     "Primal",
    //     "Low FODMAP",
    //     "Whole30"]
    // diets.forEach(async (e) => await Diet.findOrCreate({ where: { diet: e } }))
    return await Diet.findAll()
}

module.exports = { getDiets }