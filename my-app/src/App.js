import { useReducer } from 'react';
import './App.css';
import A from './Component/A';
import D from './Component/D';
import F from './Component/F';
import { CounterProvider } from './Context/Counter';

const initialState = 0;

/**
 * Action is instruction to reducer function which indicates how to do state transition.
 */
const reducer = (currentState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return currentState + action.value;
    case 'DECREMENT':
      return currentState - action.value;
    case 'RESET':
      return initialState;
    default:
      return currentState
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      <header className="App-header">
        Global: {count}
        <CounterProvider value={{ count: count, dispatch: dispatch }}>
          <A></A>
          <D></D>
          <F></F>
        </CounterProvider>

      </header>
    </div>
  );
}

export default App;
