import './App.css';
import CarList from './List/CarList';
import { nodes } from './List/data';
import NodeListWapper from './List/NodeListWrapper';

/**
 * 1. See working of carList to understand list rendering (not usage of key)
 * 2. See NodeListWapper to understand why react uses key (node pre-pend part)
 */
function App() {
  return (
    <div className="App">
      <CarList></CarList>
      {/* <NodeListWapper nodes={nodes}></NodeListWapper> */}
    </div>
  );
}

export default App;
