const { Router } = require('express');
const database = Router();
const { axios } = ("axios")
const {
    DB_API
} = process.env;

database.get('/', (res, req) => {
    fetch(`https://api.spoonacular.com/recipes/complexSearch${DB_API}`)
        .then((data) => data)
});


module.exports = database
