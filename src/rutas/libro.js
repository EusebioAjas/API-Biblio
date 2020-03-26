const {Router} = require('express');
const router = Router();
const {crear, obtener} = require('../controlador/libro');

router.post('/libros',crear);
router.get('/libros', obtener);

module.exports = router;
