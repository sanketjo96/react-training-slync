import { Component } from 'react';
import './App.css';
// import RootWithMultiContext from './Component/WithMultiContext/RootWithMultiContext'
import RootWithContext from './Component/WithContext/RootWithContext';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <RootWithContext></RootWithContext>
          {/* <RootWithMultiContext></RootWithMultiContext> */}
        </header>
      </div>
    );
  }

}

export default App;
