import React, {useState,useEffect} from 'react';
import uuid from 'react-uuid';
import { createRef } from 'react';
import axios from 'axios';

// AJA KOODI: npm i react-uuid

export default function Order({url, cart, removeFromCart, updateAmount, empty}) {
  const [inputs,_] = useState([]);
  const [inputIndex, setInputIndex] = useState(-1);

  const [asnimi, setAsnimi] = useState('');
  const [osoite, setOsoite] = useState('');
  const [postinro, setPostinro] = useState('');
  const [postitmp, setPostitmp] = useState('');
  const [puhnro, setPuhnro] = useState('');

  const [finished, setFinished] = useState(false);

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

  function order(e){
    e.preventDefault();

    const json = JSON.stringify({
      asnimi: asnimi,
      osoite: osoite,
      postinro: postinro,
      postitmp: postitmp,
      puhnro: puhnro,
      cart: cart,
    });
    axios.post(url + 'order/save.php', json, {
      headers: {
        'Accept': 'application/json',
        'Content-type' : 'application/json'
      }
    })
    .then(() => {
      empty();
      setFinished(true);
      // console.log(json);
    }).catch(error => {
      alert(error.response === undefined ? error : error.response.data.error);
    });

  }

  function changeAmount(e, product, index) {
    updateAmount(e.target.value, product);
    setInputIndex(index);
  }

  let sum = 0;
// Tilaajan tiedot <Form>.  
if (finished === false) {
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
                <td><a href="#" onClick={() => removeFromCart(product)}>Poista tuote ostoskorista</a></td>
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
      {cart.length > 0 &&
      <>
      <h3 className="header">Tilaajan tiedot</h3>
      <form onSubmit={order}>
        <div className="form-group">
          <label>Nimi:</label>
          <input className="form-control" onChange={e => setAsnimi(e.target.value)}/>
        </div>
        <div className="form-group">
          <label>Osoite:</label>
          <input className="form-control" onChange={e => setOsoite(e.target.value)}/>
        </div>
        <div className="form-group">
          <label>Postinumero:</label>
          <input className="form-control" onChange={e => setPostinro(e.target.value)}/>
        </div>
        <div className="form-group">
          <label>Kaupunki:</label>
          <input className="form-control" onChange={e => setPostitmp(e.target.value)}/>
        </div>
        <div className="form-group">
          <label>Puhelinnumero:</label>
          <input className="form-control" onChange={e => setPuhnro(e.target.value)}/>
        </div>
        <div className="buttons">
          <button className="btn btn-primary">Tilaa</button>
        </div>

      </form>
      </>
    }
    </div>
  )
} else {
  return (<h3>Kiitos tilauksesta!</h3>);
}
}