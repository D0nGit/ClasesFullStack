const empresa = {
    nombre: 'Pepsi',
    direccion: 'Calle x',
    rl: 'Venta de refrescos'
}

//const nombre = empresa.nombre;
//const direccion = empresa.direccion;
//const rol  = empresa.rol;

/**
 * ¿Que hacer para hacerlo más fácil..
 */
console.log(empresa.nombre);
const { a, b, rol } = empresa; //{} significa desestructurar
console.log(empresa);

const imprimeEmpresa = ({ nombre, rol }) => {
    console.log({ nombre, rol });
}

imprimeEmpresa(empresa);
/**
 * En arreglos
 */

const carros = ['mazda', 'bmw', 'porche'];
const [C1, c2, c3] = carros;
console.log(c3);


/**
 * perfil
 * nombre, apellido, correo, salario
 */

const perfil = {
    nombre: 'Donovan',
    apellido: 'Cortazar',
    correo: 'don@correo',
    salario: '100'
}

const imprimePerfil = ({ nombre, salario }) => {
    console.log(nombre, +" " + salario);
}

imprimePerfil(perfil);


