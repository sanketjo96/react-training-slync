import './App.css';
import StepTimer from './state/StepTimer';

function App() {
  return (
    <div className="App">
      <StepTimer format={12}></StepTimer>
    </div>
  );
}

export default App;
