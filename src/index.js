const express = require('express');
const app = express();
require('./bd');

app.set('port',3000);
app.listen(app.get('port'),()=>{
    console.log(`escuchando en el puerto ${app.get('port')}`);
});