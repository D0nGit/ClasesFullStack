

/**
 * Funcion de Orden Superior, es aquella que tiene más de un callBack
 * Callback: Funcion que se ejecuta dentro de otra función
 */
const getUserId = (id, callback) => {
    console.log('Ejecutando función callback');
    const user = {
        id: 1,
        nombre: 'Donovan'
    }

    setTimeout(() => {
        callback(user)
    }, 3000);
}

//const getUser = () => {
//    console.log('Get User');
//}
/**
 * Funciones Anonima
 */
getUserId(1, (user) => { console.log('El usuario con id ${user.nombre}') })


/**
 * Crear una funcion de orden superior obtenerTitulo
 * recibir como parametro titulo y callback
 * dentro de la funcion de OS, crear variable llamada text e inicializarla con un string 
 * que diga "Bienvenido a "
 * que concatene el titulo que recibe.
 * El callback debera ejecutarse en 5 segundos.
 * Crear una función crearTitulo que imprima la variable Text
*/

const obtenerTitulo = (titulo, callback) => {
    const text = {
        texto: "Bienvenido a "
    }
    setTimeout(() => {
        callback(text.texto + " " + titulo)
    }, 5000);
}


obtenerTitulo("México", (texto) => {
    console.log(texto);
})

const crearTitulo = (lugar) => {
    obtenerTitulo(lugar, (texto) => {
        console.log(texto);
    })
}

crearTitulo("Mexico");

//const obtenerTitulo2 = (titulo, callback) => {
//    let text = 'Bienvenido a ${titulo}';
//    setTimeout(() => {
//        callback(text);
//    }, 5000);
//}

//obtenerTitulo('Home', crearTitulo2);

let rol;
const getPerfil = (id, callback) => {
    setTimeout(() => {
        rol = 'Admin';
        callback(rol);
    }, 2000);
}

getPerfil(1, () => { console.log(rol) })


