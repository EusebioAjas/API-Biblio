const { Router } = require("express");
const router = Router();
const { crear, obtener, buscar, actualizar, eliminar } = require("../controlador/libro");

router.post("/libros", crear);
router.get("/libros", obtener);
router.get("/libros/:id", buscar);
router.put("/libros/:id", actualizar);
router.delete("/libros/:id", eliminar);
module.exports = router;
