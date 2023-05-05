import './App.css';
import TypeButtons from './components/TypeButtons/TypeButtons';
import { SelectionProvider } from './context/SelectionContext';

function App() {
  return (
    <div className="App">
      
      <SelectionProvider>
      

        <div>
          <h2 style={{color:"gray", backgroundColor:"white"}}>Tipos del pokemon enemigo:</h2>
          <div className="type-container">

            <TypeButtons/>

          </div>
        </div>


      </SelectionProvider>

    </div>
  );
}

export default App;
