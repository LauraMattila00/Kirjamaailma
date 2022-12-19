import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import ProductCard from '../components/Card/card';

export default function Products({ url, addToCart }) {

  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('');

  let params = useParams();

  useEffect(() => {
    let address = '';

    if (params.searchPhrase === undefined) {
      address = url + 'products/getproducts.php/' + params.categoryId;
    } else {
      address = url + 'products/search.php/' + params.searchPhrase;
    }


    axios.get(address)
      .then((response) => {
        const json = response.data;
        if (params.searchPhrase === undefined) {
          setCategory(json.category);
          setProducts(json.products)
        } else {
          setCategory(params.searchPhrase);
          setProducts(json);
        }
      }) .catch(error => {
        alert(error.response === undefined ? error : error.response.data.error);
      })
  }, [params])

  return (
    <section className="py-5 bg-light">
      <div className="container px-4 px-lg-5 mt-5">
        <h2 className="fw-bolder mb-4">{category}</h2>
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-5 justify-content-center">
          {products.map(product => (
            <ProductCard product={product} addToCart={addToCart} url={url}/>
          ))}
        </div>
      </div>
    </section>
  )
};