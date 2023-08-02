const fs = required('node.fs');

/**
 * Pintar La tabla de multiplicar 5
 *  * 
 */
let tabla = '';
for (i = 0; i < 10; i++) {
    tabla = + `5 * ${i} = ` + i * 5
        ;

}

console.log(tabla);

fs.writeFile(`tabla5`, tabla)