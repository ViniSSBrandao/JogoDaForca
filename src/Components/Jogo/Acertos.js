import React, {useState} from "react"
let espacos = [], palavra = []
let len, tentativa, update
export default function Acertos(prop){
   let acertos=prop.tentativa[0]
  
 
   if(!acertos) {
       len = prop.palavra.length
       for(let i=0; i<len;i++){
         
           espacos[i]= '_ '
          
           palavra[i]= prop.palavra[i]
           console.log('display: '+palavra)  
       }  
   }
   else{
    for(let i=0; i<espacos.length; i++){
        
        if(!espacos[i]){
            espacos[i]=' _ '
        }
    }
        espacos=prop.tentativa[0]
      
   }
 
  
   console.log()
   return(
       <>
       <div className="acertos">
           <p >{espacos}</p>
       </div>
       </>
   )
}

