import './App.css';
import ClickCounter from './HOC/ClickCounter';
import HoverCounter from './HOC/HoverCounter';

function App() {
  return (
    <div className="App">
      <ClickCounter></ClickCounter>
      <HoverCounter></HoverCounter>
    </div>
  );
}

export default App;
