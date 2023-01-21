const { Router } = require('express');
const diets = Router();
const {getDiets} = require("./controllers/dietController")



diets.get("/",async (req,res)=>{
    try {
        const results = await getDiets()
        res.status(200).json(results)
    } catch (error) {
        res.status(404).json({error:error.message})
    }
})






module.exports = diets