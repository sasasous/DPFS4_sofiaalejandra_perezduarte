//Módulo express
let express = require('express');


//Método Router
let router = express.Router();


//Controller
let productsController = require('../controllers/productsController');


//Rutas
router.get('/', productsController.index);
router.get('/id/:id', productsController.show);
router.get('/productNew', productsController.create);
router.post('/create', productsController.store);
router.get('/productEdit', productsController.edit);


//Exportar módulo
module.exports = router;