const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('./bd');

const cors = require('cors');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.set('port',3000);
app.listen(app.get('port'),()=>{
    console.log(`escuchando en el puerto ${app.get('port')}`);
});