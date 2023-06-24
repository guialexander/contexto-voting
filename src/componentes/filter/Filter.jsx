import React, { useState } from 'react';
import { useSelector } from '../../store';
import './filter.css'



export const Filter = () => {
  const { state,dispatch}= useSelector();
  
   const filter= state.resultTypes
   
 

 

  const handletypeChange = event => {
    const typeInput= event.target.value;
    dispatch({type: 'SET_TYPERESULT', payload : typeInput});
  };

  

  
  return (
    <div className='filter-container'>
      <h1>Filter</h1>

      <div className='filter-container_input'>
        <label>
          <input
           type="radio"
           value="num"
           checked={filter === 'num'}
           onChange={handletypeChange}
          />
          Num the Votes
        </label>
        </div> 
        
        <div className='filter-container_input'>
        <label>
          <input
            type="radio"
            value="percentage"
            checked={filter === 'percentage'}
            onChange={handletypeChange}
          />
         Percentage
        </label>
        </div> 

    <div className='totalvotes'>
      <p> Total the votes</p>
      <p className='total-color'>{state.TotalVotos}</p>
    
    </div>
         
  </div>

 
  )
}

export default Filter;
