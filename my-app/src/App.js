import './App.css';
import { MyFunctional } from './Components/Functional/MyFunctional';
import MyClass from './Components/Class/MyClass';

function App() {
  return (
    <div className="App">
      {/* <MyFunctional name={'john'}></MyFunctional> */}
      <MyClass name={'john'}></MyClass>
    </div>
  );
}

export default App;
