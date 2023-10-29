import './App.css';
import Greeting from './components/Greetings';
import Asyncapi from './components/Session38/Asyncapi';
import Asyncstate from './components/Session38/Asyncstate';
import Tooglebtn from './components/Tooglebtn';

function App() {
  return (
    <div className="App">
     
      <Tooglebtn />
      <Greeting />
      <Asyncstate/>
      <Asyncapi/>
    </div>
  );
}

export default App;
