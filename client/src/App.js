import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavHead from './component/NavHead';
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home'
import Footer from './component/Footer';
import Product from './Pages/Product';
import Productid from './Pages/Productid';
import Category from './Pages/Category';
import CategoryId from './Pages/CategoryId'
import Search from './Pages/Search';
import { StateContext } from './Lib/ContextApi';
import { Toaster } from 'react-hot-toast';
import Cart from './Pages/Cart';



function App() {
  return (
    <>
    <StateContext>
      <Toaster/>
     <NavHead/> 
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="product" element={<Product/>}>
        <Route path=":productid" element={<Productid/>} />
        </Route>
        <Route path="categories" element={<Category/>}>
        <Route path=":categoryid" element={<CategoryId/>} />
        </Route>
        <Route path="search" element={<Search/>} />
        <Route path="cart" element={<Cart/>} />
     </Routes>
     <Footer/>
     </StateContext>
    </>
  );
}

export default App;
