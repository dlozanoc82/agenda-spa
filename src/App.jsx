import { useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListaClientes from "./components/ListaClientes";

function App() {

    const [clientes, setClientes] = useState([]);
    const [cliente, setCliente] = useState({});

    return (
        <div className="container mx-auto mt-20">
            <Header/>
            
            <div className="mt-14 md:flex">
                <Formulario clientes={clientes} setClientes={setClientes} cliente={cliente} />
                <ListaClientes clientes={clientes} setCliente={setCliente} />
            </div>
            
        </div>
    )
}

export default App
