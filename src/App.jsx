import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useState, useEffect } from 'react';
import axios from "axios";
import Admin from './pages/Admin';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Search from './pages/Search';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Tuotesivu from './pages/tuotesivu';
import Order from './pages/Order';
import NotFound from './pages/NotFound';
import Login from './pages/login';
import Signup from './pages/Signup';
import Logout from './pages/Logout';

const URL = 'http://localhost/kirjamaailma/';

function App() {
  const [cart, setCart] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(URL + 'products/getcategories.php')
      .then((response) => {
        const json = response.data;
        setCategories(json);
        console.log(json);
      }).catch(error => {
        alert(error.response === undefined ? error : error.response.data.error);
      })
  }, [])

  useEffect(() => {
    if ('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  }, [])


  function addToCart(product) {
    if (cart.some(item => item.tuotenro === product.tuotenro)) {
      const existingProduct = cart.filter(item => item.tuotenro === product.tuotenro);
      updateAmount(parseInt(existingProduct[0].amount) + 1, product);
    } else {
      product['amount'] = 1;
      const newCart = [...cart, product];
      setCart(newCart);
      localStorage.setItem('cart', JSON.stringify(newCart));
    }
  }

  function removeFromCart(product) {
    const itemsWithoutRemoved = cart.filter(item => item.tuotenro !== product.tuotenro);
    setCart(itemsWithoutRemoved);
    localStorage.setItem('cart', JSON.stringify(itemsWithoutRemoved));
  }

  function updateAmount(amount, product) {
    product.amount = amount;
    const index = cart.findIndex((item => item.tuotenro === product.tuotenro));
    const modifiedCart = Object.assign([...cart], { [index]: product });
    setCart(modifiedCart);
    localStorage.setItem('cart', JSON.stringify(modifiedCart));
  }

  function empty() {
    setCart([])
    localStorage.removeItem('cart')
  }

  return (
    <>
      <div className='container-fluid'>
        <Header />
        <Navbar cart={cart} categories={categories} />
        <Routes>
          <Route path='/' element={<Home categories={categories} />} />
          <Route path='/products/:categoryId' element={<Products url={URL} addToCart={addToCart} />} />
          <Route path='/search/:searchPhrase' element={<Products url={URL} addToCart={addToCart} />} />
          <Route path='/tuotesivu/:productId' element={<Tuotesivu url={URL} addToCart={addToCart} />} />
          <Route path='/order' element={<Order url={URL} cart={cart} removeFromCart={removeFromCart} updateAmount={updateAmount} empty={empty} />} />
          <Route path='/admin' element={<Admin url={URL} />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/login' element={<Login url={URL} />} />
          <Route path='/signup' element={<Signup url={URL} />} />
        </Routes>
        <Footer />

      </div>
    </>
  );
}

export default App;
