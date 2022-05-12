import './App.css';
import JSBindings from './binding/0_bindJS';

import Bindings from './binding/1_noBind';
// import Bindings from './binding/2_inlineBind';
//import Bindings from './binding/3_constBind';
// import Bindings from './binding/4_inlineArrow';
// import Bindings from './binding/5_classPropArrow';


function App() {
  return (
    <div className="App">
      <Bindings></Bindings>
    </div>
  );
}

export default App;
