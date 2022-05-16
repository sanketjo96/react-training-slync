import { useState } from 'react';
import './App.css';
import Clock from './Clock/Clock';

function App() {
  const [isClock, setClock] = useState(true)

  const destroryClock = () => {
    setClock(false)
  }

  return (
    <div className="App">
      {isClock && <Clock/>}
      <button onClick={destroryClock}>Destroy Clock</button>
    </div>
  );
}

export default App;
