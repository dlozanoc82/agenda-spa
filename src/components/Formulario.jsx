import { useState } from "react"
import Alerta from "./Alerta";

function Formulario({cliente, setCliente}) {

    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [celular, setCelular] = useState('');
    const [genero, setGenero] = useState('');
    const [plan, setPlan] = useState('');
    const [fecha, setFecha] = useState('');
    const [error, setError] = useState(false);
    //const [alerta, setAlerta] = useState({});

    console.log({
        nombre, correo, celular, genero, plan, fecha
    });

    const handleOptionChange = (event) => {
        setGenero(event.target.value);
    };

    const handleSelectChange = (event) => {
        setPlan(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        //Validacion form
        if ([nombre, correo, celular, genero, plan, fecha ].includes('')) {
            console.log('Almenos un campo vacio');
            setError(true);
            return;
        }

        setError(false);

        //Objeto Cliente
        const objCliente = {
            nombre, 
            correo, 
            celular, 
            genero, 
            plan, 
            fecha
        }

        setCliente([...cliente, objCliente]);

        //Reiniciar Form 
        setNombre('');
        setCorreo('');
        setCelular('');
        setGenero('');
        setPlan('');
        setFecha('');
        setError(false);
        
    }

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-2xl text-center">Agendamiento de Citas</h2>
            <p className="text-lg mt-5 text-center">
                Agenda citas y {''}
                <span className="text-fuchsia-600 font-bold">Administralas</span>
            </p>

            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-5 m-3">

                {error && <Alerta/>}

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="nombre">
                        Nombre y Apellido
                    </label>
                    <input 
                        type="text" 
                        placeholder="Nombre del cliente"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-fuchsia-500"
                        id="nombre"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="email">
                        Correo
                    </label>
                    <input 
                        type="email" 
                        placeholder="Correo de contacto"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-fuchsia-500"
                        id="email"
                        value={correo}
                        onChange={e => setCorreo(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="celular">
                        Celular
                    </label>
                    <input 
                        type="number" 
                        placeholder="Numero de contacto"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-fuchsia-500"
                        id="celular"
                        value={celular}
                        onChange={e => setCelular(e.target.value)}
                        min={0}
                    />
                </div>
                <div className="mb-5">
                    <p className="block text-gray-700 uppercase font-bold mb-2">Genero</p>
                    <div className="mb-5 flex flex-wrap justify-between md:justify-around">
                        <div className="flex items-center mb-2">
                            <input id="hombre" type="radio" name="genero" value="Hombre" className="w-5 h-5" onChange={handleOptionChange} />
                            <label htmlFor="hombre" className="px-2 text-gray-700 uppercase font-bold">Hombre</label>
                        </div>
                        <div className="flex items-center mb-2">
                            <input id="mujer" type="radio" name="genero" value="Mujer" className="w-5 h-5" onChange={handleOptionChange} />
                            <label htmlFor="mujer" className="px-2 text-gray-700 uppercase font-bold">Mujer</label>
                        </div>
                        <div className="flex items-center mb-2">
                            <input id="otro" type="radio" name="genero" value="No Aplica" className="w-5 h-5 " onChange={handleOptionChange} />
                            <label htmlFor="otro" className="px-2 text-gray-700 uppercase font-bold">No Aplica</label>
                        </div>
                    </div>
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="plan-spa">
                        Plan
                    </label>
                    <select 
                        name="plan-spa" 
                        id="" 
                        className="border-2 w-full p-2 mt-2 text-gray-700 border-gray-200 rounded-md focus:outline-fuchsia-500"
                        onChange={handleSelectChange}
                    >
                        <option value="" disabled>Seleccione un plan</option>
                        <option value="Plan Celebración">Plan Celebración</option>
                        <option value="Plan Dulce Espera">Plan Dulce Espera</option>
                        <option value="Plan Amigas">Plan Amigas</option>
                        <option value="Plan Familia">Plan Familia</option>
                        <option value="Plan Romance">Plan Romance</option>
                    </select>
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="nombre">
                        Fecha de Cita
                    </label>
                    <input 
                        type="datetime-local" 
                        placeholder="Nombre del cliente"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-fuchsia-500"
                        id="nombre"
                        value={fecha}
                        onChange={e => setFecha(e.target.value)}
                    />
                </div>
                <input 
                    type="submit" 
                    className="bg-fuchsia-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-fuchsia-700 hover:cursor-pointer transition-all mt-2"
                    value="Agendar Cita"
                />
            </form>

        </div>
    )
}

export default Formulario