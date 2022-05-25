import { Component } from 'react';
import './App.css';
import Clock from './Clock/Clock';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isClock: true,
      fmt: 24
    }
  }

  destroryClock = () => {
    this.setState({ ...this.state, isClock: false })
  }

  toggleFormt = () => {
    this.setState((prevState) => {
      return { ...this.state, fmt: prevState.fmt === 24 ? 12 : 24 }
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.isClock && <Clock fmt={this.state.fmt} />}
        <button onClick={this.toggleFormt}>Toggle Format</button>
        <button onClick={this.destroryClock}>Destroy Clock</button>
      </div>
    );
  }

}

export default App;
