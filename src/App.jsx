import { useState } from 'react'
import './App.css'
import Candidate from './componentes/candidate/Candidate.jsx'
import Votostotal from './componentes/votestotal/Votestotal'
import VoteIndidual from './componentes/votingIndidual/VoteIndidual'
import Filter from './componentes/filter/Filter'

function App() {
  

  return (
    <>
    <div className='container'>

     
    <div className='candidate'>
   
      <Candidate />
      </div>  
      <br />
      <br />
      
     <div className='main'>
      <div className='persentage'>
        <Filter />
      </div>

      <div className='votes'>
        <Votostotal />
        <VoteIndidual/>
        </div>
      </div>
   

    </div>
    </>
  )
}

export default App
