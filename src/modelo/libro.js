const {model, Schema} = require('mongoose');

const libroSchema = new Schema({
    isbn:{
        type: String,
        required:true
    },
    autor:{
        type: String,
        requiered:true
    },
    numero_paginas:{
        type: Number,
        required: true
    },
    nombre_libro:{
        type: String,
        required: true
    }

});

module.exports = model('libro',libroSchema);