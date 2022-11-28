import Forca from "./Jogo/Forca"

import Letras from "./Letras"
import Acertos from "./Jogo/Acertos"
import { useState } from "react"

export default function Jogo(prop){
    
    const [classe, setClasse] = useState('')

    
    console.log(prop.acertos)
    
    return(
        <div className='jogo'>
        <Forca erro={prop.erros} />
        <button class="comecar"  onClick={() => prop.apertouBotao('awa')}>Escolher Palava</button>
        <Acertos palavra={prop.palavra} acertos={prop.acertos} classe={classe} resultado={prop.resultado}/>
        </div>
    )
}