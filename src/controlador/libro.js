libroCtrl = {};
const Libro = require("../modelo/libro");

libroCtrl.crear = async (req, res) => {
  const { isbn, autor, numeroPaginas, nombreLibro } = req.body;
  try {
    const nuevoLibro = new Libro({
      isbn,
      autor,
      numeroPaginas,
      nombreLibro
    });
    await nuevoLibro.save();
    res.json({ nuevoLibro });
  } catch (error) {
      res.json({message: error});
  }
};

module.exports = libroCtrl;
