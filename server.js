const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// app.get('/', (req, res) => {
//     // res.send('Hello World')
//     let salida = {
//         nombre: 'fernando',
//         edad: 32,
//         url: req.url
//     }

//     res.send(salida);
// });


app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});