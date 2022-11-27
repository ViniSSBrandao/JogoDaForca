import Forca from "./Jogo/Forca"
import Botao from "./Jogo/Botao"
import Letras from "./Letras"

export default function Jogo(){
    
    return(
        <div className='jogo'>
        <Forca erro={0} />
        <Botao />
        
        </div>
    )
}