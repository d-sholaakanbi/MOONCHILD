import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavHead from './component/NavHead';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Footer from './component/Footer';
import Product from './pages/Product';
import Productid from './pages/Productid';
import Category from './pages/Category';
import CategoryId from './pages/CategoryId'
import Search from './pages/Search';
import { StateContext } from './Lib/ContextApi';
import { Toaster } from 'react-hot-toast';
import Cart from './pages/Cart';
// import Profile from './pages/loginPage';



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
        <Route path="profile" element={<Profile/>} />
     </Routes>
     <Footer/>
     </StateContext>
    </>
  );
}

export default App;
