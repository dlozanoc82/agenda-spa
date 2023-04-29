
const Cliente = ({persona}) => {

    const {nombre, correo, celular, genero, plan, fecha } = persona;

    return (
            <div className="bg-white m-3 shadow rounded-xl px-5 py-10">
                <div className="lg:flex">
                    <div className="lg:w-1/2">
                        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
                            <span className="font-normal normal-case ">{nombre}</span>
                        </p>
                        <p className="font-bold mb-3 text-gray-700 uppercase">Correo: {''}
                            <span className="font-normal normal-case ">{correo}</span>
                        </p>
                        <p className="font-bold mb-3 text-gray-700 uppercase">Celular: {''}
                            <span className="font-normal normal-case ">{celular}</span>
                        </p>
                    </div>
                    <div className="lg:w-1/2">
                        <p className="font-bold mb-3 text-gray-700 uppercase">Genero: {''}
                            <span className="font-normal normal-case ">{genero}</span>
                        </p>
                        <p className="font-bold mb-3 text-gray-700 uppercase">Plan: {''}
                            <span className="font-normal normal-case ">{plan}</span>
                        </p>
                        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Cita: {''}
                            <span className="font-normal normal-case ">{fecha}</span>
                        </p>
                    </div>
                </div>
                <div className="flex justify-between mt-5">
                    <button
                        type="button"
                        className="py-2 px-10 bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold uppercase rounded-lg"
                    >Editar</button>
                    <button
                        type="button"
                        className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg "
                    >Eliminar</button>
                </div>
            </div>
    )
}

export default Cliente