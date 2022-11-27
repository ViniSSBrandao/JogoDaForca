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
        
        <button className="letra" onClick={() => clicouLetra(prop.letra)}>
        {prop.letra}
        </button>
       
        </>
    )
}

function verificaLetra(letra, palavra){
    
    if (palavra.includes(letra)){
        acertos.push(letra)
    }
    else{
        erros.push(letra)
    }
    console.log ("erros: ", erros, "acertos: ", acertos)

}

function VerificaChute(chute){
console.log("verificaChute:", chute)
}