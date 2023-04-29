import Cliente from "./Cliente"

const ListaClientes = ({clientes, setCliente}) => {

    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">

        {clientes && clientes.length ? (
            <>
                <h2 className="font-black text-3xl text-center">Listado de Citas</h2>
                <p className="text-xl mt-5 text-center">
                    Administra las {''}
                    <span className="text-cyan-600 font-bold">Citas del SPA</span>
                </p>
                
                {clientes.map( (persona) =>(
                    <Cliente
                        key={persona.id}
                        persona={persona}
                        setCliente={setCliente}
                    />
                ))}
            </>
        ): (
            <>
                <h2 className="font-black text-3xl text-center">No hay citas</h2>
                <p className="text-xl mt-5 text-center">
                    Comienza a agendar {''}
                    <span className="text-cyan-600 font-bold">citas</span>
                </p>
            </>
        )}


        </div>
    )
}

export default ListaClientes