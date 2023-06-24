import React from 'react'
import { useSelector } from '../../store'






const Votar = ({id}) => {
  
  const {state, dispatch}= useSelector();

    const handleclick = ()=>{
         dispatch( {type: 'INCREMENTAR_VOTO', payload : id})
        
      }
  return (
   <>
   
   <button onClick={handleclick }>Vote</button>
   </>
  )
}

export default Votar;
