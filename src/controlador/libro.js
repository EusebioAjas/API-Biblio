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
      res.json({message: error});
  }
};

libroCtrl.obtener = async (req, res) => {
    try{
        const libros = await Libro.find(); 
        res.json({libros});
    }catch(err){
        res.json({message:err});
    }
};

module.exports = libroCtrl;
