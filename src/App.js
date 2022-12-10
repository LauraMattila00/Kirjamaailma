import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useState, useEffect } from 'react';
import axios from "axios";
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Tuotesivu from './pages/tuotesivu';
import Order from './pages/Order';
import NotFound from './pages/NotFound';


// Kirjamaailma
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
    const newCart = [...cart, product];
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  }

  function removeFromCart(product) {
    const itemsWithoutRemoved = cart.filter(item => item.id !== product.id);
    setCart(itemsWithoutRemoved);
    localStorage.setItem('cart',JSON.stringify(itemsWithoutRemoved));
  }

  return (
    <>
      <div className='container-fluid'>
        <Header />
        <Navbar cart={cart} categories={categories} />
        <Routes>
          <Route path='/' element={<Home categories={categories}/>} />
          <Route path='/products/:categoryId' element={<Products url={URL} addToCart={addToCart} />} />
          <Route path='/tuotesivu/:productId' element={<Tuotesivu url={URL} addToCart={addToCart}/>} />
          <Route path='/order' element={<Order cart={cart} removeFromCart={removeFromCart}/>} />
          <Route path='*' element={<NotFound />} />  
        </Routes>
        <Footer />

      </div>
    </>
  );
}

export default App;
