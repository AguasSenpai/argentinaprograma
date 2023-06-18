const readlineSync = require('readline-sync');
const numero = readlineSync.question('Ingrese un numero entero entre 1 y 12: ');

let mes = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
let cantidadDeDias = [31,28,31,30,31,30,31,31,30,31,30,31];

console.log('La cantidad de dias del mes de '+ mes[numero-1] + ' es ' + cantidadDeDias[numero-1] + '.');
