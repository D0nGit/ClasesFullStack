var nombre = 'Donovan';
/**
 * Var se declara de tipo GLOBAL, pesa mas
 */

let nombre2 = 'Alejandro';
/**
 * Se crea en el scope
 * es más ligera
 */

const nombre3 = 'Alexander';


if (true) {

    var nombre = 'A';
    let nombre2 = 'B';
    console.log('nombre ' + nombre);
    console.log('nombre2 ' + nombre2);
    //nombre3 = 'C';
}

console.log('nombre ' + nombre);
console.log('nombre2 ' + nombre2);
console.log('nombre3 ' + nombre3);