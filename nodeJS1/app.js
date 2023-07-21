console.log("Hola Mundo");
/*
* Craecion de variables
*/

var name = 'Don'; //var se trabaja de forma global, por lo que esta desapa
let apellido;
const edad = 39;


let saludo = (name) => {
    return 'Hola ${name}';
}
console.log(saludo(name));
