import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import logo from "./logo.svg"

function App() {
  return (
    <>
    <div className="contenedor">
      <div className="logoTicketera">
        <img src={logo} alt="logo"></img>
        <h3>ES HORA</h3>
      </div>
      <div className="App">
        <NavBar />
      </div>
    </div>
      <div className="greeting">
        <ItemListContainer greeting={'¡Bienvenidos! 👋'}/>
      </div>
    </>

    
  );
}

export default App;
