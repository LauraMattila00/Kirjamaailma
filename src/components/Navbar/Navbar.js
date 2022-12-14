import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navbar.css'
import Cart from '../Cart';

import { FiLogIn } from 'react-icons/fi';
import { BiSearch } from 'react-icons/bi'
import {GiArchiveRegister} from 'react-icons/gi'

export default function Navbar1({ cart, categories }) {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/">Kirjamaailma</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0"navbarScroll>
                        <NavDropdown title="Tuotteet" id="navbarScrollingDropdown">
                            {categories.map(category => (
                                <NavDropdown.Item href={'/products/' + category.trnro}>{category.trnimi}</NavDropdown.Item>))}
                        </NavDropdown>
                        <Nav.Link className="nav-link" href="/order"><Cart cart={cart} />  Ostoskori</Nav.Link>
                        <Nav.Link className="nav-link" href="/login"><FiLogIn/>Kirjaudu</Nav.Link>
                        <Nav.Link className="nav-link" href="/signup"><GiArchiveRegister/> Rekisteröidy</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Etsi kaupasta..."
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-dark"><BiSearch /></Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}