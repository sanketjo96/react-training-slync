import { Component } from 'react';
import './App.css';
import MultiContext from './Components/MultiContext/MultiContext';
// import WrapperWithContext from './Components/WithContext/WrapperWithContext';
// import WrapperWithoutContext from './Components/WithoutContext/WrapperWithoutContext';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <WrapperWithoutContext></WrapperWithoutContext> */}
          {/* <WrapperWithContext></WrapperWithContext> */}
          <MultiContext></MultiContext>
        </header>
      </div>
    );
  }

}

export default App;
