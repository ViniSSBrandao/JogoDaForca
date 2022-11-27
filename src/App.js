import logo from './logo.svg';
import './App.css';
import Jogo from "./Components/Jogo"
import Letras from "./Components/Letras"
import Chute from "./Components/Chute"

function App() {
  const alphabet = ["a","b",'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  return (
    <div className="App">
      <Jogo />
      <div className="alfabeto">
      {alphabet.map((n) => <Letras letra={n} />)}
      </div>
      <Chute />
    </div>
  );
}

export default App;
