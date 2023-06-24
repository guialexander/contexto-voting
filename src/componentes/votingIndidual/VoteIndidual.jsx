import React from 'react'
import { useSelector } from '../../store';
import './voteIndividual.css'


const VoteIndidual = () => {
  const {state}=useSelector();
  const candidates= state.candidates;
  const filter=state.resultTypes;
  console.log(state)

  return (
    <div>
      <h3>Resultados de votos individuales:</h3>
      <div className='container-voteresults'>
      {candidates.map((candidate)=>(
      <div key= {candidate.id}>
        <div className='resultCandidate'>
          {(filter === 'num')?
          (<p>{candidate.name} --> {candidate.votes} </p>)
        :
         (<p>{candidate.name} --> {candidate.percentage.toFixed(2)}  %</p>) }
        </div>
      </div>
      

      ))}
      </div>
      
    </div>
  );
 };
export default VoteIndidual;
