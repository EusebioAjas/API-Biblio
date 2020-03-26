const { Router } = require("express");
const router = Router();
const { crear, obtener, buscar, actualizar } = require("../controlador/libro");

router.post("/libros", crear);
router.get("/libros", obtener);
router.get("/libros/:id", buscar);
router.put("/libros/:id", actualizar);
module.exports = router;
