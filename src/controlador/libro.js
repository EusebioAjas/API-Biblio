libroCtrl = {};
const Libro = require('../modelo/libro');

libroCtrl.crear = async (req,res) => {
    const nuevoLibro = new Libro({
        isbn: req.body.isbn,
        autor: req.body.autor,
        numeroPaginas: req.body.numeroPaginas,
        nombreLibro: req.body.nombreLibro,
    });
    console.log(nuevoLibro);
}

module.exports = libroCtrl;