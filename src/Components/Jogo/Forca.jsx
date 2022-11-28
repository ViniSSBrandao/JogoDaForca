import React, {useState} from 'react'

export default function Forca(prop){
    let forcas = ["Assets/forca0.png", "Assets/forca1.png", "Assets/forca2.png", "Assets/forca3.png", "Assets/forca4.png", "Assets/forca5.png", "Assets/forca6.png"]
    
    const [data, setData] = useState(null)
    
    /*mudarForca()
    function mudarForca(){
        setData(forcas[prop.erro])
    }*/

    return(
    <>
    <img data-test='game-image' src={forcas[prop.erro]}/>
    </>
    )
}