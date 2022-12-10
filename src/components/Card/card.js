import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './card.css'

export default function ProductCard ({url, product, addToCart}) {
  return (
    <Card className="card">
      <Card.Img className="card-img" variant="top" src={url + 'images/' + product.trnro + '/' + product.kuva} />
      <Card.Body className="card-body">
        <Card.Title>{product.tuotenimi}</Card.Title>
        <Card.Text>{product.hinta}  €</Card.Text>
        <Button variant="dark"><Link to={"/tuotesivu/" + product.tuotenro} className="nav-link">Lisätiedot</Link></Button>
        <Button variant="dark" onClick={() => addToCart(product)}><HiOutlineShoppingCart/>  Lisää ostoskoriin</Button>
      </Card.Body>
    </Card>
  );
}

