# Make It Real - It's All About Context

This is a solution to the API creation with typescript and prism project from the Make It Real course.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview :

-voting app is created to exercise context.

### The challenge

-It was a good challenge, where we managed context, status and dispatch.

it was divided into different folders to have a code easier to adjust and reuse.

### Screenshot

![]()![context](https://github.com/guialexander/contexto-voting/assets/71296562/0ef262eb-ef0e-4b1e-95c3-c2201280bf85)


## My process

### Built with

-javascript
-context
-css

### What I learned

we created a voting app with the help of context to not handle so many props, and cleaner code.
we leave an example of the code:

```js
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const store = { state, dispatch };

  return (
    <AppStateContext.Provider value={store}>
      {children}
    </AppStateContext.Provider>
  );
};

import { INCREMENTAR_VOTO, SET_TYPERESULT } from "./actiontypes";

function reducer(state, action) {
  switch (action.type) {
    case INCREMENTAR_VOTO: {
      const id = action.payload;
      const newTotalVotes = state.TotalVotos + 1;
      const newVoteCandidate = state.candidates.map((candidate) => {
        if (candidate.id === id) {
          const votes = candidate.votes + 1;
          return {
            ...candidate,
            votes,
            percentage: (votes / newTotalVotes) * 100,
          };
        } else {
          return {
            ...candidate,
            percentage: (candidate.votes / newTotalVotes) * 100,
          };
        }
      });

      return {
        ...state,
        candidates: newVoteCandidate,
        TotalVotos: newTotalVotes,
      };
    }

    case SET_TYPERESULT: {
      return { ...state, resultTypes: action.payload };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export default reducer;
```

### Continued development

- I will continue practicing to have a better handling of DOM, studying and consulting my mentors so that every day I improve my knowledge.

### Useful resources

- https://kentcdodds.com/blog/how-to-use-react-context-effectively

## Author

- email - [guialexander1@gmail.com]
- Twitter - [@guialexander1](https://www.twitter.com/guialexander1)
- Github - [guialexander]

## Acknowledgments

-I want to thank the make it real family since it has given me a new vision of my working life to improve and get out of the comfort zone and know that we can give more than what we already know
