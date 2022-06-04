import { Component } from 'react';
import './App.css';
import RootWithContext from './Components/withContext/RootWithContext';
// import RootWithoutContext from './Components/withoutContext/Root';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <RootWithoutContext></RootWithoutContext> */}
          <RootWithContext></RootWithContext>
        </header>
      </div>
    );
  }

}

export default App;
