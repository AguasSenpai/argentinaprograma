const personas = ['Jose', 'Maria', 'Juan', 'Andres', 'Lionel', 'Sofia', 'Leandro', 'Emilia'];
let admitidos = [];
let rechazados = [];
let admitidosOrdenados = [];
let rechazadosOrdenados = [];

// Criterios para listas //
for (let i = 0; i < personas.length; i++) {
    if (personas[i] == 'Jose' || personas[i] == 'Sofia') {
        rechazados = rechazados.concat(personas[i]);
    } else {
        admitidos = admitidos.concat(personas[i]);
    }
}

// Impresión de cada lista desordenada de invitados //
console.log('La lista de invitados admitidos es:');
admitidos.forEach((Element) => console.log(Element));

console.log('La lista de invitados rechazados es:');
rechazados.forEach((Element) => console.log(Element));

// Impresión de cada lista ordenada de invitados //
admitidosOrdenados = admitidos.sort();
console.log('La lista ordenada de invitados admitidos es:');
admitidosOrdenados.forEach((Element) => console.log(Element));

rechazadosOrdenados = rechazados.sort();
console.log('La lista ordenada de invitados rechazados es:');
rechazadosOrdenados.forEach((Element) => console.log(Element));
