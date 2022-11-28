import logo from './logo.svg';
import './App.css';
import Jogo from "./Components/Jogo"
import Letras from "./Components/Letras"
import Chute from "./Components/Chute"
import palavras from './palavras';
import verificaLetra from './Components/Letras'
import { useState } from 'react';

function App() {
  const alphabet = ["a","b",'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  const aux = Math.round(Math.random() * palavras.length)
  let palavraArray = [], palavra =palavras[aux], acertos = [];
  for(let i=0; i<palavra.length; i++){
    palavraArray.push(palavra[i])
    
  }

  const [iniciar, setIniciar] = useState(0)
  
  const [tentativa, setTentativa] = useState(acertos)

  const [erros, setErros] = useState(0)
  
  
  
  return (
    <div className="App">
      <Jogo palavra={palavra} apertouBotao={iniciar => setIniciar(iniciar)}/>
      <div className="alfabeto">
      {alphabet.map((n) => <Letras letra={n} estadoJogo={iniciar} palavra={palavraArray} tentativa={()=>setTentativa(tentativa)} erros={()=>setErros(erros)}/>)}
      </div>
      <Chute palavra={palavra} />
    </div>
  );
}

export default App;
