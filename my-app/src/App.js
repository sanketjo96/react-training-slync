import './App.css';
// import ComplexReducer from './Component/ComplexReducer';
// import MultipleReducer from './Component/MultipleReducer';
import SimpleReducer from './Component/SimpleReducer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SimpleReducer></SimpleReducer>
        {/* <ComplexReducer></ComplexReducer> */}
        {/* <MultipleReducer></MultipleReducer> */}
      </header>
    </div>
  );
}

export default App;
