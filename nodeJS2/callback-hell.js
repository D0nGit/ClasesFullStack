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
]

/**
 * Simplificado
 * IF = ?
 * ELSE = :
 *  */
const getEmpleado = (id, callback) => {
    const empleado = empleados.find(e => e.id === id)?.nombre;
    if (empleado) {
        callback(null, empleado);
    } else {
        callback('El id no se encontro');
    }
    console.log(empleado);
}

getEmpleado(2, (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    console.log(empleado)


})



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
]
const getSalario = (id, callback) => {
    const salario = salarios.find(e => e.id === id)?.salario;
    if (salario) {
        callback(null, salario);
        console.log(salario);
    } else {
        callback(`El salario no se encontro ${id}`);
        console.log(`El salario no se encontro ${id}`); //ALT 96 `
    }

}

getSalario(4, (err, salario) => {

})

let idEmpleado = 1;
let idSalario = 1;
getEmpleado(idEmpleado, (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    getSalario(idSalario, (err, salario) => {
        if (err) {
            return console.log(err);
        }
        console.log(`El empleado : ${empleado} tiene un salario de ${salario}`);
    })
})



