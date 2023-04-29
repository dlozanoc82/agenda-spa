import { useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListaClientes from "./components/ListaClientes";

function App() {

    const [cliente, setCliente] = useState([]);

    return (
        <div className="container mx-auto mt-20">
            <Header/>
            
            <div className="mt-12 md:flex">
                <Formulario cliente={cliente} setCliente={setCliente} />
                <ListaClientes cliente={cliente} />
            </div>
            
        </div>
    )
}

export default App
