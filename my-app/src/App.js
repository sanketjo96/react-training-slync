import './App.css';
import { useState } from 'react';
import SwipeGate from './swipe/SwipeGate';
import { empList } from './data/emp';

function App() {
  let [index, setIndex] = useState(0);

  const Swipe = () => {
    console.log('click')
    if (index < empList.length) {
      setIndex(++index);
    }
  }
  
  return (
    <div className="App">
        <SwipeGate emp={empList[index]}></SwipeGate>
        <button onClick={() => Swipe()}>Swipe</button>
    </div>
  );
}

export default App;
