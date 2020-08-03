import React from 'react'
import hookAction from './actions/hookAction'

import Input from './component/input/Input'

/** 
 * reducer to update state 
 * state {object} - existing state
 * action {object} - contains type and payload properties for the state object
 *                   e.g { type: 'secretWord', payload: 'party' } 
*/
function reducer(state, action){
  switch (action.type) {
    case 'setSecretWord':
      return { ...state, secretWord: action.payload }
  
    default: 
      throw new Error(`Invalid action type: ${action.type}`)
  }
}

export default function App() {
  const [ state, dispatch] = React.useReducer(
    reducer,
    { secretWord: '' }
  )

  const setSecretWord = secretWord => {
    dispatch({ type: 'setSecretWord', payload: secretWord })
  }

  React.useEffect(() => {
    hookAction.getSecretWord(setSecretWord)
  }, [])

  return (
    <div className="container" data-test="component-app">
      <Input secretWord={ state.secretWord }/>
    </div>
  )
}


