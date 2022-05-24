import './App.css';
import InlineContainer from './styles/1_inline/InlineContainer';
import CSSContainer from './styles/2_css/CSSContainer';
import ModuleContainer from './styles/3_cssModule/ModuleContainer';


function App() {
  return (
    <div className="App">
     <InlineContainer></InlineContainer>
     {/* <CSSContainer></CSSContainer> */}
     {/* <ModuleContainer></ModuleContainer> */}
    </div>
  );
}

export default App;
