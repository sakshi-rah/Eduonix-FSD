import './App.css';
import Timer from './components/hookdemo/Timer';
import Useeffect from './components/hookdemo/Useeffect';
import Realtimeclock from './components/hookdemo/realtimeclock';

function App() {
  return (
    <div className="App">
      <h2>Today is Session39 on useEffect</h2>
      <Useeffect />
      <Timer />
      <Realtimeclock/>
    </div>
  );
}

export default App;
