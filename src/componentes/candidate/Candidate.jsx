import { useEffect, useState } from 'react';
import './candidate.css'
import Votar from './Votar';
import {useSelector } from '../../store';





const Candidate = () =>{    

  const {state}=useSelector();
  const candidates=state.candidates;


   return(
        <div className='candidate_container'>
          <h1>{`Candidates`}</h1>
         
                  
        <div className='candidates'>
          
        {candidates.map((candidate) => (
          // eslint-disable-next-line react/jsx-key
          <div className='candidates-spaces' key={candidate.id}>        
            <p>{candidate.name}</p>
           <Votar  id= {candidate.id}/>        
          </div>
        ))}
                
      </div>
     
      
         
     
      
    </div>


    );

};

export default Candidate;