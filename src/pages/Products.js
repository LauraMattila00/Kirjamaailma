import React, { useState, useEffect } from 'react'
import '../components/products.css'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { HiOutlineShoppingCart } from 'react-icons/hi';

export default function Products({ url, addToCart }) {

  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('');

  let params = useParams();

  useEffect(() => {
    axios.get(url + 'products/getproducts.php/' + params.categoryId)
      .then((response) => {
        const json = response.data;
        setCategory(json.category);
        setProducts(json.products);
      }).catch(error => {
        alert(error.response === undefined ? error : error.response.data.error);
      })
  }, [params]);

  return (
    <section className="py-5 bg-light">
      <div className="container px-4 px-lg-5 mt-5">
        <h2 className="fw-bolder mb-4">{category}</h2>
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-5 justify-content-center">
          {products.map(product => (
            <div key={product.tuotenro}>
              <div className="col mb-5" id="products-col">
                <div className="card h-100">
                  <img className="card-img-top" id="products" src={url + 'images/' + product.trnro + '/' + product.kuva} alt="tuotekuva" />
                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">{product.tuotenimi}</h5>
                      <h5>{product.hinta}  €</h5>
                    </div>
                  </div>
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <Link className="btn btn-outline-dark mt-auto" to={'../tuotesivu/' + product.tuotenro}>Lisätiedot</Link>
                      <button className='btn btn-outline-dark mt-auto' type="button" onClick={e => addToCart(product)}><HiOutlineShoppingCart />  Lisää ostoskoriin</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
};

//<button className='btn btn-primary' type="button" onClick={e => addToCart(product)}>Lisää ostoskoriin</button> (tuotteen jälkeen)

/*   return (
  <div>
  <h3>{category}</h3>
  {products.map(product => (
    <div key={product.tuotenro}>
      {product.tuotenimi}
        </div>
      ))}
    </div>
  ) */

