const { Router } = require('express');
const database = Router();
const { axios } = ("axios")
const {
    DB_API
} = process.env;
//    fetch(`https://api.spoonacular.com/recipes/complexSearch`)
// .then((data) => data) ${DB_API}

database.get('/', (res, req) => {
 
});

database.get('/:id', (res, req) => {
 
});


module.exports = database
