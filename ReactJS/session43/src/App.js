
import './App.css';
import Agecounter from './Components/AgeCounter';
import Counter from './Components/Counter';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'

function App() {
  return (
    <div className="App">
      <Counter/>
      <Agecounter/>
    </div>
  );
}

export default App;
