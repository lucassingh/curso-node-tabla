const { crearArchivo } = require('./helpers/multiplcar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow), 'creado')
    .catch(err => console.log(err));
