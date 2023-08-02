const roles = [
    {
        id: 1,
        rol: 'adm'
    },
    {
        id: 2,
        rol: 'op'
    },
    {
        id: 3,
        rol: 'suc'
    },
]




const getRol = async (id) => {
    try {
        return new Promise((resolve, reject) => {
            const rol = roles.find(r => r.id == id)?.rol;
            (rol) ? resolve("el rol es " + rol) : reject(`El rol no existe con el id ${id}`);
        });
    }
    catch (err) {
        throw err;
    }

}


getRol(1)
    .then(msg => {
        console.log(msg);
    })
    .catch(err => {
        console.log(err);
    })



