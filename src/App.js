import logo from './logo.svg';
import './App.css';
import Jogo from "./Components/Jogo"
import Letras from "./Components/Letras"
import Chute from "./Components/Chute"
import palavras from './palavras';
import verificaLetra from './Components/Letras'

function App() {
  const alphabet = ["a","b",'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  const aux = Math.round(Math.random() * palavras.length)
  let palavraArray = [], palavra =palavras[aux]
  for(let i=0; i<palavra.length; i++){
    palavraArray.push(palavra[i])
    console.log(palavraArray)
  }

  return (
    <div className="App">
      <Jogo />
      <div className="alfabeto">
      {alphabet.map((n) => <Letras letra={n} palavra={palavraArray} />)}
      </div>
      <Chute palavra={palavra} />
    </div>
  );
}

export default App;
