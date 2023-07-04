posibles = ['piedra', 'papel', 'tijeras'];

// Función para generar jugada de la computadora //
// Fuente para 'valorJugada': https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random //
const valorJugada = Math.floor(Math.random() * (Math.floor(2) - Math.ceil(0) + 1) + Math.ceil(0));
const jugadaComputador = posibles[valorJugada];
function obtenerJugadaComputadora() {
    console.log('La computadora eligió: %s', jugadaComputador);
}

// Función para que usuario seleccione una jugada válida //
const readlineSync = require('readline-sync');
const jugadaUsuario = readlineSync.question('Ingrese la jugada deseada (piedra/papel/tijeras): ');
function obtenerJugadaUsuario() {
    if (posibles.includes(jugadaUsuario) === false) {
        console.log('"%s" no es una opción válida, por favor reinicie el juego y seleccione entre piedra, papel o tijeras.', jugadaUsuario);
    } else {
        obtenerJugadaComputadora();
        console.log('El usuario eligió: %s.', jugadaUsuario);
    }
}
obtenerJugadaUsuario();

// Función que determinará a quien gane el juego //
function determinarGanador() {
    
    // Resultados de la ronda //
    let resultadosPosibles = ['Empate', 'Gana la computadora', 'Gana el usuario'];
    if (jugadaUsuario == jugadaComputador) {
        let resultado = 0;
        console.log('El resultado fue: %s.', resultadosPosibles[resultado]);
    } else if (jugadaUsuario == posibles[0]) {
        if (jugadaComputador == posibles[1]) {
            let resultado = 1;
            console.log('El resultado fue: %s.', resultadosPosibles[resultado]);
        } else if (jugadaComputador == posibles[2]) {
            let resultado = 2;
            console.log('El resultado fue: %s.', resultadosPosibles[resultado]);
        }
    } else if (jugadaUsuario == posibles[1]) {
        if (jugadaComputador == posibles[0]) {
            let resultado = 2;
            console.log('El resultado fue: %s.', resultadosPosibles[resultado]);
        } else if (jugadaComputador == posibles[2]) {
            let resultado = 1;
            console.log('El resultado fue: %s.', resultadosPosibles[resultado]);
        }
    } else if (jugadaUsuario == posibles[2]) {
        if (jugadaComputador == posibles[0]) {
            let resultado = 1;
            console.log('El resultado fue: %s.', resultadosPosibles[resultado]);
        } else if (jugadaComputador == posibles[1]) {
            let resultado = 2;
            console.log('El resultado fue: %s.', resultadosPosibles[resultado]);
        }
    }
}
determinarGanador();
