import { useState } from "react"
import Forca from "./Jogo/Forca"
let letraClicada = [], acertos = [], erros = 0
let palavra, estadoJogo, classe
let copiaCerto, copiaErrado
let resultado = ''

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
            acertos.includes('') ? console.log('ta quase') : resultado = 'acertou'
            
        }
        else{
            
            if(erros>=5){
                 resultado = 'errou'
                    erros == 5 ? erros++ : erros = erros
                  copiaCerto = [...palavra]
                }
                else {
                    console.log(erros)
                    erros++
                }
            
        }
    
        console.log (resultado)
    
    }
    

    return(
        <>
        
        
        <button data-test='letter' className={clicou} onClick={() => {clicouLetra(prop.letra) ; prop.tentativa(copiaCerto); prop.erros(erros); prop.resultado(resultado)}} >
        {prop.letra}
        </button>
       
        </>
    )
}


