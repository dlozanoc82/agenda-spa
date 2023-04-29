import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListaClientes from "./components/ListaClientes";

function App() {

    const [clientes, setClientes] = useState([]);
    const [cliente, setCliente] = useState({});

    useEffect(() => {
        const obtenerLS = () =>{
            const clientesLS = JSON.parse(localStorage.getItem('clientes')) ?? [];
            setClientes(clientesLS);
        }
        obtenerLS();
    }, []);

    useEffect(() => {
        localStorage.setItem('clientes', JSON.stringify(clientes));
    }, [clientes]);

    const eliminarCliente = (id) => {
        const clientesActualizados = clientes.filter(cliente => cliente.id !== id);
        setClientes(clientesActualizados);
    }    

    return (
        <div className="container mx-auto mt-20">
            <Header/>
            
            <div className="mt-14 md:flex">
                <Formulario 
                    clientes={clientes} 
                    setClientes={setClientes} 
                    cliente={cliente} 
                    setCliente={setCliente}
                />
                <ListaClientes 
                    clientes={clientes} 
                    setCliente={setCliente} 
                    eliminarCliente={eliminarCliente}
                />
            </div>
            
        </div>
    )
}

export default App
