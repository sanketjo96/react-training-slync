import './App.css';
import ClickCounter from './HOC/ClickCounter';
import HoverCounter from './HOC/HoverCounter';

import ClickCounter1 from './HOC/ClickCounter1'
import HoverCounter1 from './HOC/HoverCounter1'

/**
 * 
 * How props can be retain ?
 */
function App() {
  return (
    <div className="App">
      {/**
       * Without HOC
       */}
      {/* <ClickCounter></ClickCounter>
      <HoverCounter></HoverCounter> */}

      {/**
       * WitH HOC
       */}
      {/* <ClickCounter1></ClickCounter1>
      <HoverCounter1></HoverCounter1> */}

      {/**
       * WitH HOC and prop dirlling
       */}
      <ClickCounter1 label={'New Click Counte'}></ClickCounter1>
      <HoverCounter1 label={'New HoverCounter'}></HoverCounter1>
    </div>
  );
}

export default App;
