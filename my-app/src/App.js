import './App.css';
import ClickCounter from './RenderProps/ClickCounter';
import HoverCounter from './RenderProps/HoverCounter';

import ClickCounter1 from './RenderProps/ClickCounter1'
import HoverCounter1 from './RenderProps/HoverCounter1'
import Counter from './RenderProps/Counter';
import Sample from './RenderProps/Sample';

/**
 * 
 * How props can be retain ?
 */
function App() {
  return (
    <div className="App">
      {/**
       * Without Render prop
       */}
      <ClickCounter></ClickCounter>
      <HoverCounter></HoverCounter>

       {/**
        * passing props as value and as function
        */}
      {/* <Sample name={'sanket'}></Sample> */}

      {/**
       * WitH Render prop
       */}
      {/* <Counter render={(count, counterHandle) => (
        <ClickCounter1 counterHandle={counterHandle} count={count}></ClickCounter1>
      )}></Counter>

      <Counter render={(count, counterHandle) => (
        <HoverCounter1 counterHandle={counterHandle} count={count}></HoverCounter1>
      )}></Counter> */}
    </div>
  );
}

export default App;
