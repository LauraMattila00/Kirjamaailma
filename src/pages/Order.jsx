import React from 'react';
import uuid from 'react-uuid';

// AJA KOODI: npm i react-uuid

export default function Order({cart, removeFromCart}) {
  let sum = 0;

  return (
    <div>
      <h3 className="header">Ostoskori</h3>
      <table className="table">
        <tbody>
          {cart.map(product => {
            sum+=parseFloat(product.hinta);
            return (
              <tr key={uuid()}>
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
    </div>
  )
}