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
    console.log(nuevoLibro);
  } catch (error) {
    res.json({ message: error });
  }
};

libroCtrl.obtener = async (req, res) => {
  try {
    const libros = await Libro.find();
    res.json({ libros });
  } catch (err) {
    res.json({ message: err });
  }
};

libroCtrl.buscar = async (req, res) => {
  try {
    const encontrado = await Libro.findById(req.params.id);
    res.json({ encontrado });
  } catch (error) {
    res.json({ message: error });
  }
};

libroCtrl.actualizar = async (req, res) => {
  try {
    const actualizado = await Libro.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.json({ actualizado });
  } catch (error) {
    res.json({ message: error });
  }
};

libroCtrl.eliminar = async (req, res) => {
    try{
        const eliminado = await Libro.findByIdAndRemove(req.params.id);
        res.json({eliminado});
    }catch(err){
        res.json({ message: err });
    }
}
module.exports = libroCtrl;
