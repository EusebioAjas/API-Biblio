const {model, Schema} = require('mongoose');

const libroSchema = new Schema({
    isbn:{
        type: String,
        required:true
    },
    autor:{
        type: String,
        required:true
    },
    numeroPaginas:{
        type: Number,
        required: true
    },
    nombreLibro:{
        type: String,
        required: true
    }

});

module.exports = model('libro',libroSchema);