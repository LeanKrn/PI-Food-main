const { Router } = require('express');
const authRouter = require('./auth.js');
const databaseRouter = require('./Database.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/auth', authRouter);

router.use("dataBase",databaseRouter);

module.exports = router;
