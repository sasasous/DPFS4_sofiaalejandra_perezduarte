//Módulo express
let express = require('express');


//Método Router
let router = express.Router();


//Controller
let productsController = require('../controllers/productsController');


//Rutas
router.get('/', productsController.index);

//Listado
router.get('/', productsController.list);
router.post('/', productsController.list);
router.get('/:id', productsController.show);
router.get('/productNew', productsController.create);
router.post('/create', productsController.store);
router.get('/productEdit', productsController.edit);
router.put('/:id', productsController.update);
router.delete('/delete/:id', productsController.destroy);




//Exportar módulo
module.exports = router;