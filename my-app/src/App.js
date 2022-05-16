import { useState } from 'react';
import './App.css';
import Clock from './Clock/Clock';

function App() {
  const [isClock, setClock] = useState(true)
  const [fmt, setFmt] = useState(24)

  const destroryClock = () => {
    setClock(false)
  }

  const toggleFormt = () => {
    setFmt(fmt === 24 ? 12 : 24)
  }

  return (
    <div className="App">
      {isClock && <Clock fmt={fmt}/>}
      <button onClick={toggleFormt}>Toggle Format</button>
      <button onClick={destroryClock}>Destroy Clock</button>
    </div>
  );
}

export default App;
