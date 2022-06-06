import { Component } from 'react';
import './App.css';
// import RootWithMultiContext from './Components/multiContext/RootWithMultiContext';
// import RootWithContext from './Components/withContext/RootWithContext';
import RootWithoutContext from './Components/withoutContext/RootWithoutContext';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <RootWithoutContext></RootWithoutContext>
          {/* <RootWithContext></RootWithContext> */}
          {/* <RootWithMultiContext></RootWithMultiContext> */}
        </header>
      </div>
    );
  }

}

export default App;
