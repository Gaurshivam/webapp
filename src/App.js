import { Route, Routes } from 'react-router';
import './App.css';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Product from './Components/Products/Product';
import Card from './Components/AddToCard/Card';

function App() {
  return (
    <div>
    <Nav />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/product' element={<Product />}/>
      <Route path='/addtocard' element={<Card />}/>
    </Routes>
    </div>
  );
}

export default App;
