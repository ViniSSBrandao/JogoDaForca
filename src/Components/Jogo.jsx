import Forca from "./Jogo/Forca"

import Letras from "./Letras"
import Acertos from "./Jogo/Acertos"
import { useState } from "react"

export default function Jogo(prop){
    
    const [classe, setClasse] = useState('')
    const [iniciar, setIniciar] = useState(0)
    
    console.log(prop.acertos)
    
   
    return(
        <div className='jogo'>
        <Forca erro={prop.erros} />
        <button class="comecar" data-test='choose-word'  onClick={() => {prop.apertouBotao('awa')}}>Escolher Palava</button>
        <button className="reload" onClick={() => window.location.reload(false)}>Jogar novamente</button>
        <Acertos palavra={prop.palavra} acertos={prop.acertos} classe={classe} resultado={prop.resultado}/>
        </div>
    )
}