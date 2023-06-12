let cita = "Tres tristes tigres comen trigo en un trigal";
let substring = "tigres comen trigo";

let tamañoDeCita = cita.length;
console.log("El tamaño de la cita es: %i.", tamañoDeCita);

let indice = cita.indexOf(substring);
console.log("El índice del substring es: %i.", indice);

let citaRevisada = cita.split(" en un trigal")[0];
console.log("La cita revisada es: %s.", citaRevisada);
