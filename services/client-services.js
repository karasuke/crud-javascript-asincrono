const listaClientes = () => fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());



const crearCliente = (nombre, email) => {

    return fetch("http://localhost:3000/perfil", {

        method: "POST",
        headers: {
            "content-Type": "application/json",
        },
        body:JSON.stringify({nombre,email,id:uuid.v4()}),
    });
};

const eliminarCliente = (id) =>{
    return fetch(`http://localhost:3000/perfil/${id}`,{
        method:"DELETE"
    })
}

const detalleCliente = (id) =>{
    return fetch(`http://localhost:3000/perfil/${id}`).then((respuesta) => respuesta.json()
       
    );
}

const actualizarCliente= (nombre,email,id)=>{

    return fetch(`http://localhost:3000/perfil/${id}`,{
        method:"PUT",
        headers: {
            "content-Type": "application/json",
        },
        body:JSON.stringify({nombre,email})
    }).then((respuesta)=> console.log(respuesta))
    .catch((error)=>console.log(error))
}

export const clientServices = {

    listaClientes,
    crearCliente,
    eliminarCliente,
    detalleCliente,
    actualizarCliente
};








