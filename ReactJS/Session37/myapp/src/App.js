import './App.css';
import Counter from './components/Counter';
import Tooglebtn from './components/Tooglebtn';
import Greeting from './components/Greetings';

function App() {
  return (
    <div className="App">
      <Counter/>
      <Tooglebtn/>
      <Greeting/>
    </div>
  );
}

export default App;
