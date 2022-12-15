import React, {useState,useEffect} from 'react';
import uuid from 'react-uuid';
import { createRef } from 'react';

// AJA KOODI: npm i react-uuid

export default function Order({url, cart, removeFromCart, updateAmount}) {
  const [inputs,_] = useState([]);
  const [inputIndex, setInputIndex] = useState(-1);

  useEffect(() => {
    for (let i = 0;i < cart.length;i++) {
      inputs[i] = createRef();
    }
  }, [cart.length])
  
  useEffect(()=> {
    if (inputs.length > 0 && inputIndex > -1 && inputs[inputIndex].current !== null) {
      inputs[inputIndex].current.focus();
    }
  },[cart])

  function changeAmount(e, product, index) {
    updateAmount(e.target.value, product);
    setInputIndex(index);
  }

  let sum = 0;
// Tilaajan tiedot <Form>  
// updateAmount lisäys.

  return (
    <div>
      <h3 className="header">Ostoskori</h3>
      <table className="table">
        <tbody>
          {cart.map((product,index) => {
            sum+=parseFloat(product.hinta * product.amount);
            return (
              <tr key={uuid()}>
                <td><img src={url + 'images/' + product.trnro + '/' + product.kuva} style={{width: "50px"}}/></td>
                <td>{product.tuotenimi}</td>
                <td>{product.hinta} €</td>
                <td>
                <input ref={inputs[index]} style={{width: '60px'}} value={product.amount} onChange={e => changeAmount(e,product,index)} />
                </td>
                <td><a href="#" onClick={() => removeFromCart(product.tuotenro)}>Poista tuote ostoskorista</a></td>
              </tr>
            )
            })}
              <tr key={uuid()}>
            <td></td>
            <td></td>
            <td>Yhteensä:  {sum.toFixed(2)} €</td>
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