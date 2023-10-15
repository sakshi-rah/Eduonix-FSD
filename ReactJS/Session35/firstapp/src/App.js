import './App.css';
import Header from './Componants/Header';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import { ProductList } from './Componants/Session36/productlist';

function App() {
  return (
    <div className='App'>
      <h1>Hello Sakshi Rahangdale!</h1>
      <Header title="Learn about React Props" />
      <div>
        <ProductList />
      </div>
    </div>
  );
}

export default App;
