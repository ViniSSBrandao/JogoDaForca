import React, {useState} from "react"
const palavra = []
let len, classe
export default function Acertos(prop){
    
   
    if(prop.palavra) {
        len = prop.palavra.length
        for(let i=0; i<len;i++){
            palavra[i]= '_ '
            
        }
        
    }

    if(prop.acertos){
        for(let i=0; i<len;i++){
            if(prop.acertos[i]){
            palavra.splice(i, 1, prop.acertos[i] + ' ')
        }
    }
    }

    
    
    const [display, setDisplay] = useState(palavra)
    
    
    

    function trocaPalavra(){
        setDisplay()
    }
    
    
    return(
        <>
        <div className="acertos" data-test='word' data-answer={prop.palavra}>
            <p onClick={trocaPalavra} className={prop.resultado}>{display}</p>
        </div>
        </>
    )
}

