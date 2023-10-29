import './App.css';
import Counter from './components/Counter';
import Greeting from './components/Greetings';
import Asyncapi from './components/Session38/Asyncapi';
import Asyncstate from './components/Session38/Asyncstate';
import Navbar from './components/Session38/Navbar';
import Tooglebtn from './components/Tooglebtn';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <div className='container'>
          <h1>Online Shopping Portal</h1>
        </div>

        <Navbar />

        <Routes>
          <Route path='/' element={<Navigate to="/home" replace />}></Route>
          <Route path='/asyncstate' element={<Asyncstate />}></Route>
          <Route path='/asyncapi' element={<Asyncapi />}></Route>
          <Route path='/counter' element={<Counter />}></Route>
          <Route path='/greeting' element={<Greeting />}></Route>
          <Route path='/tooglebtn' element={<Tooglebtn />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
