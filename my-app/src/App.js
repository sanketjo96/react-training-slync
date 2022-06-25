import { Component, useState } from 'react';
import './App.css';
import Clock from './Clock/Clock';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isClock: true,
    }
  }

  destroryClock = () => {
    this.setState({ isClock: false })
  }

  render() {
    return (
      <div className="App">
        {this.state.isClock && <Clock />}
        <button onClick={this.destroryClock}>Destroy Clock</button>
      </div>
    );
  }
}


export default App;
