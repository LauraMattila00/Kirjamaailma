import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../components/pages.css'


export default function Tuotesivu({ addToCart, url }) {
    const [product, setProduct] = useState([]);

    let params = useParams();

    useEffect(() => {
        axios.get(url + 'products/getproduct.php/' + params.productId)
            .then((response) => {
                const json = response.data;
                setProduct(json);
                console.log(json);
            }).catch(error => {
                alert(error.response === undefined ? error : error.response.data.error);
            })
    }, [params]);

    return (
        <div>
            {product.map(product => (
            <div key={product.tuotenro}>
            <section className="py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="row gx-4 gx-lg-5 align-items-center">
                                <div className="col-6"><img className="card-img-top mb-5 mb-md-0" src={url + 'images/' + product.trnro + '/' + product.kuva} alt="tuotekuva" id="tuotekuva" />
                                </div>
                                <div className="col-6">
                                    <h1 className="display-5 fw-bolder">{product.tuotenimi}</h1>
                                    <div className="fs-5 mb-5">
                                        <span>{product.hinta}€</span>
                                    </div>
                                    <p className="lead">{product.teksti}</p>
                                    <div className="d-flex">
                                        <input className="form-control text-center me-3" id="inputQuantity" type="num" value="1" style={{ maxwidth: "3rem" }} />
                                        <button className="btn btn-outline-dark flex-shrink-0" type="button" onClick={e => addToCart(product)}>
                                            <i className="bi-cart-fill me-1"></i>
                                            Lisää ostoskoriin
                                        </button>
                                    </div>
                                </div>
                            </div>
                    </div>
            </section>
            </div>
            ))}
        </div>
    )
}
