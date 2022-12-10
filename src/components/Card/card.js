import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './card.css'

export default function ProductCard ({url, product, addToCart}) {
  return (
    <Card>
      <Card.Img className="card-img" variant="top" src={url + 'images/' + product.trnro + '/' + product.kuva} />
      <Card.Body className="card-body">
        <Card.Title>{product.tuotenimi}</Card.Title>
        <Card.Text>{product.hinta}  €</Card.Text>
        <Button variant="secondary"><Link to={"/tuotesivu/" + product.tuotenro}>Lisätiedot</Link></Button>
        <Button variant="secondary" onClick={() => addToCart(product)}><HiOutlineShoppingCart/>  Lisää ostoskoriin</Button>
      </Card.Body>
    </Card>
  );
}

