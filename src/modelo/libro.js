const {model, Schema} = require('mongoose');

const libroSchema = new Schema({
    isbn:{
        type: String,
        required:true
    }
});

module.exports = model('libro',libroSchema);