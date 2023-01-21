const { Router } = require('express');
const authRouter = require('./auth.js');
const recipesRouter = require('./RecipeRouter.js');
const dietsRouter = require('./DietsRouter.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// router.use('/auth', authRouter);

router.use("/recipes",recipesRouter);
router.use("/diets",dietsRouter);

module.exports = router;
