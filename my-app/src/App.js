import { Component } from 'react';
import './App.css';
import InputParaCombo from './Component/InputParaCombo';
import ToggleList from './Component/ToggleList';

/**
 * Create 2 UI portions 
 * 1. Name list with header. This list should be collapsible.
 * 2. Paragraph and input combo. One should able to toggle betwn them onClick of para and onBlur of input
 * 
 * Post creating above portions, identify common logic and get rid of that using design patterns.
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ToggleList></ToggleList>
          <InputParaCombo></InputParaCombo>
        </header>
      </div>
    );
  }

}

export default App;
