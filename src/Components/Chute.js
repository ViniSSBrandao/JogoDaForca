import React, {useState} from 'react'

export default function Chute(){
    const [data, setData]=useState(null)
    const [print, setPrint]=useState(null)

    function pegarDados(entrada){
        setData(entrada)
        console.warn(entrada.target.value)
        setPrint(false)
    }

   

    return(
        <>
        <div className="chute">
            <h1>Ja sei a palavra!</h1>
            <input type='text' onChange={pegarDados}/>
            <button className="chute" onClick={()=>setPrint(true)}> chutar!</button>
        </div>
        </>
    )
}