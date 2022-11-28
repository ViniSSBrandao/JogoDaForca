import React, {useState} from 'react'

let chute = '';
let resultado =''

export default function Chute(prop){
    const [data, setData]=useState(null)
    
   

    function pegarDados(entrada, sinal){
        setData(entrada)
        if(!sinal){
            chute = (entrada.target.value)
        }
        else
           {
             VerificaChute(chute, prop.palavra)
             console.log(chute)
        }
        
    }
    
    function testar(){
        pegarDados('', true)
    }
    
    function VerificaChute(chute, palavra){
        chute = chute.toLowerCase()
        if(chute == palavra) {
            resultado = 'acertou'
            prop.chute(chute)
        } 
        else{
            resultado='errou'
            prop.erros(6)
        }
    }

    return(
        <>
        <div className="chute">
            <h1>Ja sei a palavra!</h1>
            <input type='text' onChange={pegarDados} placeholder="tente seu melhor!" />
            <button type='submit' className="chutebotao" onClick={testar} onChange={prop.resultado(resultado)} > chutar!</button>
        </div>
        </>
    )
}
