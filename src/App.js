import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import api from "./services/api";
import './styles.css';

function App() {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

  async function handleSearch(){
    
    if(input === ''){
      alert("Preencha com algum cep!")
      return;
    }

    try {
      const response = await api.get(`${input}/json`)
      setCep(response.data)
      setInput("")

    } catch {
      alert("Erro!!")
      setInput("")
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>

      <div className="containerInput">
        <input type="text" placeholder="Digite o CEP..."
          value={input} onChange={(e) => setInput(e.target.value)}/>
        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#fff"/>
        </button>
      </div>


      {Object.keys(cep).length > 0 && (
        <main className="main">
        <h2>CEP: {cep.cep}</h2>

        {Object.keys(cep.logradouro).length > 0 && (
        <span>{cep.logradouro}</span>
        )}
        {Object.keys(cep.complemento).length > 0 && (
          <span>Complemento: {cep.complemento}</span>
        )}

        {Object.keys(cep.bairro).length > 0 && (
          <span>Bairro: {cep.bairro}</span>
        )}

        <span>{cep.localidade} - {cep.uf}</span>
      </main>
      )}

      
    </div>
  );
}

export default App;
