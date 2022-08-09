import { FiSearch } from "react-icons/fi";
import './styles.css';
function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>
      <div className="containerInput">
        <input type="text" placeholder="Digite o CEP..."/>
        <button className="buttonSearch">
          <FiSearch size={25} color="#fff"/>
        </button>
      </div>
      <main className="main">
        <h2>CEP: 59560-000</h2>
        <span>Rua 26 de julho</span>
        <span>Complemento: bababa</span>
        <span>Bairro: centro</span>
        <span>Rio grande do norte - RN</span>
      </main>
    </div>
  );
}

export default App;
