import './App.css';
import CarList from './List/CarList';
import { nodes } from './List/data';
import NodeListIndexWapper from './List/NodeListIndexWapper';
import NodeListWapper from './List/NodeListWrapper';

/**
 * 1. See working of carList to understand list rendering (not usage of key)
 * 2. See NodeListWapper to understand why react uses key (node pre-pend part)
 * 3. See how using index as keys break few cases.
 */
function App() {
  return (
    <div className="App">
      <CarList></CarList>
      {/* <NodeListWapper nodes={nodes}></NodeListWapper> */}
      {/* <NodeListIndexWapper nodes={nodes}></NodeListIndexWapper> */}
    </div>
  );
}

export default App;
