import React, {useState} from 'react'

let chute = '';

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

    return(
        <>
        <div className="chute">
            <h1>Ja sei a palavra!</h1>
            <input type='text' onKeyPress={pegarDados} placeholder="tente seu melhor!" />
            <button type='submit' className="chute" onClick={testar} > chutar!</button>
        </div>
        </>
    )
}

function VerificaChute(chute, palavra){
    chute = chute.toLowerCase()
    chute == palavra ? console.log("acertou") : console.log("perdeu")
}