import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListaClientes from "./components/ListaClientes";


function App() {
    return (
        <div className="container">
            <Header/>
            <Formulario />
            <ListaClientes />
        </div>
    )
}

export default App
