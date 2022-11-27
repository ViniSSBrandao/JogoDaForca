import logo from './logo.svg';
import './App.css';
import Jogo from "./Components/Jogo"
import Letras from "./Components/Letras"
import Chute from "./Components/Chute"
import palavras from './palavras';
import verificaLetra from './Components/Letras'

function App() {
  const alphabet = ["a","b",'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  return (
    <div className="App">
      <Jogo />
      <div className="alfabeto">
      {alphabet.map((n) => <Letras letra={n} palavra={palavras[0]} />)}
      </div>
      <Chute palavra={palavras[0]} />
    </div>
  );
}

export default App;
