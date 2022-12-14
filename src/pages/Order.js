import React, {useState,useEffect} from 'react';
import uuid from 'react-uuid';

// AJA KOODI: npm i react-uuid

export default function Order({url, cart, removeFromCart}) {
  

  let sum = 0;
// Tilaajan tiedot <Form>  
// updateAmount lisäys.
// Tuotekuvat ostoskoriin.
// <td><img src="" width="72" height="72"></img></td>
  return (
    <div>
      <h3 className="header">Ostoskori</h3>
      <table className="table">
        <tbody>
          {cart.map(product => {
            sum+=parseFloat(product.hinta);
            return (
              <tr key={uuid()}>
                <td><img src={url + 'images/' + product.trnro + '/' + product.kuva} style={{width: "50px"}}/></td>
                <td>{product.tuotenimi}</td>
                <td>{product.hinta} €</td>
                <td><a href="#" onClick={() => removeFromCart(product.tuotenro)}>Poista tuote ostoskorista</a></td>
              </tr>
            )
            })}
              <tr key={uuid()}>
            <td></td>
            <td>{sum.toFixed(2)} €</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <h3 className="header">Tilaus tiedot</h3>
      <form onSubmit={Order}>
        <div className="form-group">
          <label>Etunimi:</label>
          <input className="form-control"/>
        </div>
        <div className="form-group">
          <label>Sukunimi:</label>
          <input className="form-control"/>
        </div>
        <div className="form-group">
          <label>Osoite:</label>
          <input className="form-control"/>
        </div>
        <div className="form-group">
          <label>Postinumero:</label>
          <input className="form-control"/>
        </div>
        <div className="form-group">
          <label>Kaupunki:</label>
          <input className="form-control"/>
        </div>
        <div className="form-group">
          <label>Puhelinnumero:</label>
          <input className="form-control"/>
        </div>
        <div className="buttons">
          <button className="btn btn-primary">Tilaa</button>
        </div>

      </form>
    </div>
  )
}