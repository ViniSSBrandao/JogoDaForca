import React, {useState} from "react"
const palavra = []
let len
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
    
    console.log(display)
    return(
        <>
        <div className="acertos">
            <p onClick={trocaPalavra}>{display}</p>
        </div>
        </>
    )
}

