import './App.css';
import TextComponent from './Components/TextComponent';
import TextPortal from './Components/TextPortal';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <TextComponent></TextComponent>
          <TextPortal></TextPortal>
      </header>
    </div>
  );
}

export default App;
