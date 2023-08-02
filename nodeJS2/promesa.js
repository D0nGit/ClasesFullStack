/**
 * Promesa
 */

const funcionResolve = () => {
    return Promise.resolve('Todo salio bien');
}
const funcionReject = () => {
    return Promise.reject('Todo salio mal');
}

funcionResolve().then(value => {
    console.log(value);
});

funcionReject().catch(value => {
    console.log(value);
});


//**Ejemplo 2 */


const empleados = [{
    id: 1,
    nombre: 'Donovan'
},
{
    id: 2,
    nombre: 'Alejandro'
},
{
    id: 3,
    nombre: 'Juan'
}
];

const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        const empleado = empleados.find(e => e.id === id)?.nombre;
        (empleado)
            ? resolve(empleado)
            : reject(`No existe el empleado con id ${id}`);
    });
}

const id = 1;
getEmpleado(id).then(empleado => { console.log(empleado) })
    .catch(err => console.log(err))


/*Ejemplo 3*/
const salarios = [{
    id: 1,
    salario: 400
},
{
    id: 2,
    salario: 100
},
{
    id: 3,
    salario: 600
}
];
const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find(e => e.id == id)?.salario;
        //console.log('el salario ' + salario);
        //salario = null;
        (salario) ? resolve(salario) : reject(`El salario no corresponde con el id ${id}`);
    });
}
getSalario(id)
    .then(salario => {
        console.log(salario)
    }).catch(err => console.log(err))

/***
 * Mandar a llamar a la función empleado y si existe el empleado 
 * ejecutar getSalario
 */


getEmpleado(id)
    .then(empleado => {
        console.log(`S  ${empleado}`);
        getSalario(id).
            then(salario => {
                console.log(`S  ${salario}`)
            }).catch(err => console.log(err))
            .catch(err => console.log(err))
    }
    );