import logo from './logo.svg';
import './App.css';
import SimpleTable from './props/SimpleTable';

function App() {
  /**
   * Simple table component
   * is rerendering in optimized way whenever
   * we are changing prop
   */
  return (
    <div className="App">
      <SimpleTable border={3}></SimpleTable>
    </div>
  );
}

export default App;
