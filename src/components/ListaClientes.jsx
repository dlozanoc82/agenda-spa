import Cliente from "./Cliente"

const ListaClientes = ({cliente}) => {

    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">
            <h2 className="font-black text-2xl text-center">Listado de Citas</h2>
                <p className="text-lg mt-5 text-center">
                    Administra las {''}
                    <span className="text-fuchsia-600 font-bold">Citas del SPA</span>
                </p>
            
            {cliente.map( (persona) =>(
                <Cliente
                    key={persona.id}
                    persona={persona}
                />
            ))}

        </div>
    )
}

export default ListaClientes