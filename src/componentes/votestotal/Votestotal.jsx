import React from 'react'
import './votestotal.css'
import { useSelector } from '../../store';

export const Votostotal = () => {
  const {state}= useSelector();
  const total=state.TotalVotos;
   return (
    <div className='total-vote'>
      <h3>Total the votes: {total}</h3>
    </div>
  )
}

export default Votostotal;
