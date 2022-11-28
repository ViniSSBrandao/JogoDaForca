import { useState } from "react"
import Forca from "./Jogo/Forca"
let letraClicada = [], acertos = [], erros = []
let palavra, estadoJogo, classe, tentativas = ''

export default function Letras(prop){
    
    !prop.estadoJogo ? estadoJogo = 0 : estadoJogo = 1
    
    

    palavra = prop.palavra
        function clicouLetra(entrada){

            if(estadoJogo){
                if(letraClicada.includes(entrada)){
                    
            }
            else {
                tentativas = verificaLetra(entrada, palavra)
                letraClicada.push(entrada)
                setClicou('letra')
                console.log('tentativas: '+tentativas+acertos+erros)
                
            }
              
              
        }

        }

    estadoJogo ? classe = ['letra ativada'] : classe = ['letra']
    const [clicou, setClicou] = useState('letra ativada')  
    
    
    return(
        <>
        
        
        <button className={clicou} onClick={() => {clicouLetra(prop.letra); prop.info(tentativas)}} >
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
                    acertos.splice(i, 0, letra)
                    console.log(0)
                }
                else{
                    acertos.splice(i, 0, letra)
                    console.log(1)
                }
            }
            else if(!acertos[i]){
                acertos[i]=''
                console.log(2)
            }
        }
        
        acertos.includes('_','') ? console.log('ta quase' + acertos) : console.log('acertou ' + acertos)
        return ([acertos, erros.length]);
    }
    else{
        erros.push(letra)
        erros.length>=6 ? console.log('perdeu') : console.log('errou')
        return ([acertos, erros.length]);
    }

    console.log ("erros: ", erros, "acertos: ", acertos)

}

