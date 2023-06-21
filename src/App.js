import './App.css';
import TypeButtons from './components/TypeButtons/TypeButtons';
import { SelectionProvider } from './context/SelectionContext';

function App() {
  return (
    <div className="App">
      
      <SelectionProvider>
      

        <div className='mainContainer'>
          <h2 className='mainTitle'>Tipos del pokemon enemigo:</h2>
          <div className="type-container">

            <TypeButtons/>

          </div>
        </div>


      </SelectionProvider>

    </div>
  );
}

export default App;
