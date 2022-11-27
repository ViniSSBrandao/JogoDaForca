import Forca from "./Jogo/Forca"
let letraClicada = [], acertos = [], erros = []
let palavra

export default function Letras(prop){
    
    palavra = prop.palavra
        function clicouLetra(entrada){
            if(letraClicada.includes(entrada)){

            }
            else {
                verificaLetra(entrada, palavra)
                letraClicada.push(entrada)
            }   
        }

        
    return(
        <>
        
        <div className="tampabotao"></div>
        <button className="letra" onClick={() => clicouLetra(prop.letra)}>
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
        }
        acertos.includes('') ? console.log('ta quase') : console.log('acertou')
    }
    else{
        erros.push(letra)
    }

    console.log ("erros: ", erros, "acertos: ", acertos)

}

