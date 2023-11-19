import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import Apitask from './components/hookdemo/Session40/Apitask';
import Inputvalidation from './components/hookdemo/Session40/Inputvalidation';
import Userdetails from './components/hookdemo/Session40/Userdetails';
import Submissiontimer from './components/hookdemo/Submissiontimer';
// import Timer from './components/hookdemo/Timer';
import Useeffect from './components/hookdemo/Useeffect';
import Realtimeclock from './components/hookdemo/realtimeclock';
import MyGrandParent from './components/hookdemo/Session41/mygrandparent';
import { ThemeProvider } from './components/hookdemo/Session42/ThemeContext';
import ThemedComponent from './components/hookdemo/Session42/ThemeComponent';
import { AuthProvide } from './components/hookdemo/Session42/AuthContext';
import UserInfo from './components/hookdemo/Session42/UserInfo';

function App() {
  return (
    <div className="App">
      { /*<h2>Today is Session41</h2>
      <MyGrandParent />
      <ThemeProvider>
        <ThemedComponent />
       </ThemeProvider>*/}
       <AuthProvide>
        <h1>Authentication App</h1><br/><br/>
        <UserInfo/>
       </AuthProvide>
    </div>
  );
}

export default App;
