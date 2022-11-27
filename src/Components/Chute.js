import React, {useState} from 'react'

let chute = '';

export default function Chute(prop){
    const [data, setData]=useState(null)
   

    function pegarDados(entrada, sinal){
        setData(entrada)
        
        if(!sinal){
            console.log("sla man")
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
            <input type='text' onChange={pegarDados}/>
            <button className="chute" onClick={testar}> chutar!</button>
        </div>
        </>
    )
}

function VerificaChute(chute, palavra){
    chute == palavra ? console.log("acertou") : console.log("perdeu")
}