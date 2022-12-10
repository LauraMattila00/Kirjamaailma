import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import Cart from './Cart';

import { FiLogIn } from 'react-icons/fi';
import { BiCategory } from 'react-icons/bi';
import { BiSearch } from 'react-icons/bi'

/* Aja tämä koodi -- npm install react-icons*/




export default function Navbar({ cart, categories }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Offcanvas navbar large">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Etusivu</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="d-flex justify-content-end"></div>

                <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbar2Label">Kirjamaailma</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><BiCategory /> Tuotteet</a>
                                <ul className="dropdown-menu">
                                    {categories.map(category => (
                                        <li key={category.trnro}>
                                            {<Link
                                                className='dropdown-item'
                                                to={'/products/' + category.trnro}>{category.trnimi}
                                            </Link>}
                                        </li>
                                    ))} 
                                </ul>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/Order"> <Cart cart={cart} />&nbsp;&nbsp;Ostoskori</Link>
                            </li>

                            <div className='nav-item'>
                                <Link className='nav-link active' aria-current="page" to="/login"><i className='fa fa-sign-in me-1'></i> <FiLogIn />   Kirjaudu</Link>
                            </div>

                        </ul>
                        <form className="d-flex mt-3 mt-lg-0" role="search">

                            <input className="form-control me-2" type="search" placeholder="Hae kaupasta.." aria-label="Search" id="öö" />
                            <button className="btn btn-outline-light" type="submit"><BiSearch /></button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    )
}

