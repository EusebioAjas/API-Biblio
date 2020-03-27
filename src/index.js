const express = require('express');
const app = express();

require('./bd');

const cors = require('cors');
app.use(express.json());
app.use(cors());

app.set('port',3000);
app.listen(app.get('port'),()=>{
    console.log(`escuchando en el puerto ${app.get('port')}`);
});

app.use('/api/v1',require('./rutas/libro'));