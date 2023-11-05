import './App.css';
import Inputvalidation from './components/hookdemo/Session40/Inputvalidation';
import Submissiontimer from './components/hookdemo/Submissiontimer';
// import Timer from './components/hookdemo/Timer';
import Useeffect from './components/hookdemo/Useeffect';
import Realtimeclock from './components/hookdemo/realtimeclock';

function App() {
  return (
    <div className="App">
      <h2>Today is Session39 on useEffect</h2>
      <Submissiontimer submissionDate="2023-11-10T23:59:59" /><br/>
      <Inputvalidation/>
    </div>
  );
}

export default App;
