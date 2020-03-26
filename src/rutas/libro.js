const {Router} = require('express');
const router = Router();
const {crear} = require('../controlador/libro');

router.post('/libros',crear);

module.exports = router;
