import { Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import NotFound from './pages/NotFound';
import data from './components/data';

// const URL = 'http://localhost:8888/kirjamaailma/'; << TARKISTA TIETOKANNAN NIMI KUN SE ON TEHTY

function App() {
  return (
    <>
      <div className='container-fluid'>
        <Header />
        <Navbar url={URL} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        
        </Routes>
        <Footer />

      </div>
    </>
  );
}

export default App;
