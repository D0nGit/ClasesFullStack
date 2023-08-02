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


const id = 1;
const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        const empleado = empleados.find(e => e.id === id)?.nombre;
        (empleado)
            ? resolve(empleado)
            : reject(`No existe el empleado con id ${id}`);
    });
}

const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find(e => e.id == id)?.salario;
        //console.log('el salario ' + salario);
        //salario = null;
        (salario) ? resolve(salario) : reject(`El salario no corresponde con el id ${id}`);
    });
}


const getInfoEmpleado = async (id) => {
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El salario del  ${empleado} es de  ${salario}`
    } catch (err) {
        throw err;
    }
}


getInfoEmpleado(id)
    .then(msg => {
        console.log(msg);
    })
    .catch(err => {
        console.log(err);
    })

