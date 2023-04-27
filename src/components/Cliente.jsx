
const Cliente = () => {
    return (
            <div className="bg-white m-3 shadow rounded-xl px-5 py-10 lg:flex">
                <div className="lg:w-1/2">
                <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
                    <span className="font-normal normal-case ">Nicol</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Correo: {''}
                    <span className="font-normal normal-case ">correo@correo.com</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Celular: {''}
                    <span className="font-normal normal-case ">3152413812</span>
                </p>
                </div>
                <div className="lg:w-1/2">
                <p className="font-bold mb-3 text-gray-700 uppercase">Genero: {''}
                    <span className="font-normal normal-case ">Mujer</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Plan: {''}
                    <span className="font-normal normal-case ">Familiar</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Cita: {''}
                    <span className="font-normal normal-case ">Fecha</span>
                </p>
                </div>
            </div>     
    )
}

export default Cliente