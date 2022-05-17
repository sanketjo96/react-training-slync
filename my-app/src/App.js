import './App.css';
import ExpenseForm from './Features/Add/ExpenseForm';
import ExpenseList from './Features/Track/ExpenseList';

function App() {
  return (
    <div className="App">
        <ExpenseForm></ExpenseForm>
        <ExpenseList></ExpenseList>
    </div>
  );
}

export default App;
