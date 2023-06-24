import {INCREMENTAR_VOTO, SET_TYPERESULT} from './actiontypes'

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

  export default reducer;