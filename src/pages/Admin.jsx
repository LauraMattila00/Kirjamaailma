
import axios from 'axios';
import React, { useState } from 'react'
import { Alert, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import "./Admin.css";

function Admin({ url }) {
    const [value, setValue] = useState("");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const submitForm = (event) => {
        if (value === "")
            return;
        event.preventDefault();
        setSuccess(false);
        setError(false);
        const json = JSON.stringify({
            name: value
        })
        axios.post(
            url + 'products/addcategory.php',
            json,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(function (response) {
                console.log(response);
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false)
                }, 2000);
            })
            .catch(function (error) {
                setError(true);
                setTimeout(() => {
                    setError(false)
                }, 2000);

                console.log(error);
            });
    }

    const handleChange = (event) => {
        event.preventDefault();
        setValue(event.target.value);
    }

    return (
        <div className='form-container'>
            <Form className="form" onSubmit={submitForm}>
                <Form.Label htmlFor="input-trnimi">Syötä lisättävä tuoteryhmä</Form.Label>
                <Form.Control
                    type="text"
                    id="input-trnimi"
                    onChange={handleChange}
                />
                <Button className="button" type="submit" disabled={!value}>Lisää</Button>
            </Form>
            <Alert show={success} variant={"info"}>
                Tuoteryhmän lisääminen onnistui!
            </Alert>
            <Alert show={error} variant={"danger"}>
                Tuoteryhmän lisääminen epäonnistui!
            </Alert>

        </div>
    )
}



export default Admin




/*import axios from 'axios';
import React, { useState } from 'react'
import { Alert, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import "./Admin.css";

function Admin({ url }) {
    const [value, setValue] = useState("");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const submitForm = (event) => {
        event.preventDefault();
        setSuccess(false);
        setError(false);
        const json = JSON.stringify({
            name: value
        })
        axios.post(
            url + 'products/addcategory.php',
            json,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(function (response) {
                console.log(response);
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false)
                }, 2000);
            })
            .catch(function (error) {
                setError(true);
                setTimeout(() => {
                    setError(false)
                }, 2000);

                console.log(error);
            });
    }

    const handleChange = (event) => {
        event.preventDefault();
        setValue(event.target.value);
    }

    return (
        <div id="form-container" className='form-container'>
            <Form className="form" onSubmit={submitForm}>
                <Form.Label htmlFor="input-trnimi">Syötä lisättävä tuoteryhmä</Form.Label>
                <Form.Control
                    type="text"
                    id="input-trnimi"
                    onChange={handleChange}
                />
                <Button className="button" type="submit">Lisää</Button>
            </Form>
            <Alert className="alert" show={success} variant={"info"}>
                Tuoteryhmän lisääminen onnistui!
            </Alert>
            <Alert id="alert" className="alert" show={error} variant={"danger"}>
                Tuoteryhmän lisääminen epäonnistui!
            </Alert>

        </div>
    )
}



export default Admin*/