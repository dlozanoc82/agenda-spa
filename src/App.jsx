import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListaClientes from "./components/ListaClientes";


function App() {
    return (
        <div className="container mx-auto mt-20">
            <Header/>
            
            <div className="mt-12">
                <Formulario />
                <ListaClientes />
            </div>
            
        </div>
    )
}

export default App
