import './App.css';
import CarList from './List/CarList';
import PerfListWapper from './List/PerfList';

const nodes = ['Hello', 'World']
function App() {
  return (
    <div className="App">
      <CarList></CarList>
      {/* <PerfListWapper nodes={nodes}></PerfListWapper> */}
    </div>
  );
}

export default App;
