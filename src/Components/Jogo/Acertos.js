import React, {useState} from "react"
const palavra = []
let len
export default function Acertos(prop){
    
   
    if(prop.palavra) {
        len = prop.palavra.length
        for(let i=0; i<len;i++){
            palavra[i]= '_ '
            console.log('display: '+palavra)
        }
        
    }

    if(prop.letra){
        for(let i=0; i<len;i++){
            palavra[i]= (prop.letra)
            console.log('display: '+palavra)
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

