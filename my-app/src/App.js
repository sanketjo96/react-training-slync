import './App.css';
import StepTimer from './state/StepTimer';

function App() {
  return (
    <div className="App">
      <StepTimer format={24}></StepTimer>
    </div>
  );
}

export default App;
