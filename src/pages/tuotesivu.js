import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../components/tuotesivu.css';


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
                                    <p className="lead">{/* Kirjoitetaanko tähän jotakin tekstiä? */}</p>
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
            {/* Samantapaiset tuotteet*/}
            <section className="py-5 bg-light">
                <div className="container px-4 px-lg-5 mt-5">
                    <h2 className="fw-bolder mb-4">Samantapaiset tuotteet</h2>
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        <div className="col mb-5">
                            <div className="card h-100">
                                {/* tuote kuva*/}
                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                {/* Tuote tiedot*/}
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        {/* Tuote nimi*/}
                                        <h5 className="fw-bolder">Kirja1</h5>
                                        {/* Tuote hinta*/}
                                        40.00€ - 80.00€
                                    </div>
                                </div>
                                {/* tuote toiminto*/}
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Lisätiedot</a></div>

                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                {/* Alennus leima*/}
                                <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>Ale</div>
                                {/* tuote kuva*/}
                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                {/* tuote tiedot*/}
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        {/* tuote nimi*/}
                                        <h5 className="fw-bolder">Erikoistuote</h5>
                                        {/* tuote arvostelut*/}
                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                        </div>
                                        {/* tuote hinta*/}
                                        <span className="text-muted text-decoration-line-through">20.00€</span>
                                        18.00€
                                    </div>
                                </div>
                                {/* Tuote toiminto*/}
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Lisää koriin</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                {/* Alennus leima*/}
                                <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>Ale</div>
                                {/* tuote kuva*/}
                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                {/* Tuote tiedot*/}
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        {/* tuote nimi*/}
                                        <h5 className="fw-bolder">Alennus</h5>
                                        {/*tuote hinta*/}
                                        <span className="text-muted text-decoration-line-through">50.00€</span>
                                        $25.00
                                    </div>
                                </div>
                                {/*tuote toiminto*/}
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Lisää koriin</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                {/* tuote nimi*/}
                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                {/*tuote tiedot*/}
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        {/* tuote nimi*/}
                                        <h5 className="fw-bolder">Suosittu</h5>
                                        {/* tuote arvostelut*/}
                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                        </div>
                                        {/* tuote hinta*/}
                                        40.00€
                                    </div>
                                </div>
                                {/* tuote toiminto*/}
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Lisää koriin</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
