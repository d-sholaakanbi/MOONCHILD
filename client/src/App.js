/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavHead from './component/NavHead';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import Footer from './component/Footer';
import Products from './Pages/Product';  // Consider renaming this component to `Product` to match the import
import ProductId from './Pages/Productid';
import Category from './Pages/Category';
import CategoryId from './Pages/CategoryId';
import Search from './Pages/Search';
import { StateContext } from './Lib/ContextApi';
import { Toaster } from 'react-hot-toast';
import Cart from './Pages/Cart';
import Login from './Pages/loginPage';
import Signup from './Pages/Signup';

function App() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <StateContext>
      <Toaster />
      {!isAuthPage && <NavHead />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />  
        <Route path="product/:productid" element={<ProductId />} />  
        <Route path="categories" element={<Category />} />
        <Route path="categories/:categoryid" element={<CategoryId />} /> 
        <Route path="search" element={<Search />} />
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
      {!isAuthPage && <Footer />}
    </StateContext>
  );
}

export default App;
