import { useState } from "react"
import Forca from "./Jogo/Forca"
let letraClicada = [], acertos = [], erros = 0
let palavra, estadoJogo, classe
let copiaCerto, copiaErrado

export default function Letras(prop){
    console.log(estadoJogo)
    
    !prop.estadoJogo ? estadoJogo = 0 : estadoJogo = 1
    

    palavra = prop.palavra
        function clicouLetra(entrada){

            if(estadoJogo){
                if(letraClicada.includes(entrada)){
                    setClicou('letra')
            }
            else {
                verificaLetra(entrada, palavra)
                letraClicada.push(entrada)
                setClicou('letra')
            }   
        }

        }

    estadoJogo ? classe = ['letra ativada'] : classe = ['letra']
    const [clicou, setClicou] = useState('letra ativada')  
    
    
    return(
        <>
        
        
        <button className={clicou} onClick={() => {clicouLetra(prop.letra) ; prop.tentativa(copiaCerto); prop.erros(erros)}} >
        {prop.letra}
        </button>
       
        </>
    )
}

function verificaLetra(letra, palavra){
    
    console.log(palavra)
    if (palavra.includes(letra)){
        for(let i=0; i<palavra.length; i++){
            if(palavra[i] === letra){
                if(!acertos[i]){
                    acertos.splice(i, 1, letra)
                }
                else{
                    acertos.splice(i, 0, letra)
                }
            }
            else if(!acertos[i]){
                acertos[i]=''
            }
            copiaCerto = [...acertos]
        }
        acertos.includes('') ? console.log('ta quase') : console.log('acertou')
        
    }
    else{
        erros++
        erros.length>=6 ? console.log('perdeu') : console.log('errou')
        
    }

    console.log ("erros: ", erros, "acertos: ", acertos)

}

