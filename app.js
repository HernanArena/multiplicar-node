//requires

const { crearArchivo,listarTabla } = require('./multiplicar/multiplicar');
const {argv} = require('./config/yargs');
var colors = require('colors');

let comando = argv._[0]
switch(comando){
  case 'listar':
    listarTabla(argv.base,argv.limite)
      .then(listado => console.log(listado))
      .catch(e=>console.log(e));
    break;
  case 'crear':
    crearArchivo(argv.base,argv.limite)
      .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
      .catch(e=>console.log(e));
    break;
  default:
    console.log('comando no reconocido');
}




//console.log(argv);
// console.log(process.argv); //objeto global
// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split("=")[1];
