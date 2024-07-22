import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavHead from './component/NavHead';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import Footer from './component/Footer';
import Product from './Pages/Product';
import Productid from './Pages/Productid';
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
  console.log('Current Path:', location.pathname);
  console.log('Is Auth Page:', isAuthPage);


  return (
    <StateContext>
      <Toaster />
      {!isAuthPage && <NavHead />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Product />}>
          <Route path=":productid" element={<Productid />} />
        </Route>
        <Route path="categories" element={<Category />}>
          <Route path=":categoryid" element={<CategoryId />} />
        </Route>
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
