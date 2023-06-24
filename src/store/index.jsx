/* eslint-disable no-undef */
import { createContext, useReducer, useContext } from 'react';
import {INCREMENTAR_VOTO, SET_TYPERESULT} from './actiontypes'


const AppStateContext = createContext();

const initialState = {  
  TotalVotos: 0, 
    candidates : [
    {id:1, name: "David", votes: 0 , percentage:0},
    {id:2, name: "Angel", votes: 0 , percentage:0},
    {id:3, name: "Georgy", votes: 0 , percentage:0},
    {id:4, name: "Juan", votes: 0 , percentage:0},
    {id:5, name: "Alex", votes: 0 , percentage:0},
  ],
  resultTypes: 'percentage',
    
       
  };


 function reducer (state, action){
    switch(action.type){
    
    case INCREMENTAR_VOTO :{
      const id= action.payload;
      const newTotalVotes = state.TotalVotos +1;
      const newVoteCandidate= state.candidates.map((candidate)=>{
        if (candidate.id === id){
          const votes= candidate.votes +1;
          return {...candidate,votes,percentage: ( votes/newTotalVotes )*100  };
        }else{
          return{...candidate, percentage:( candidate.votes/newTotalVotes )*100 }
        }
      })

      return {
      ...state,
      candidates: newVoteCandidate,
      TotalVotos: newTotalVotes,
       
      };
      
     
       
    }

    case SET_TYPERESULT :{
      return{...state,resultTypes: action.payload}

      

    }
    
    default: {
        throw new Error(`Unhandled action type: ${action.type}`);
      }
    }
  }
    

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    const store = { state, dispatch };
  
    return (
      <AppStateContext.Provider value={store}>
        {children}
      </AppStateContext.Provider>
    );
  };

  // Le ponemos este nombre para que sea mas facil de entender -> Redux
export const useSelector = () => {
  const context = useContext(AppStateContext);

  if (context === undefined) {
    throw new Error('useSelector must be used within a AppProvider');
  }

  return context
};



