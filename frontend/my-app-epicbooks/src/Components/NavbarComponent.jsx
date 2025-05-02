import React from "react";
import { Navbar, Container,  } from "react-bootstrap";
import { Nav, Form, Button } from 'react-bootstrap';



function NavbarComponent () {
    return (
      
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <Nav.Link href="#action3">Browse</Nav.Link>
          </Nav>
          <h1>Benvenuto in ShopBook!!</h1>
          <p>Il nostro e-commece di libri online offre una vasta selezione di titili per tutti i gusti e le esigenze.
            Leggere non è mai stato cosi facile.Scopri nouvi mondi e approfonsci le tue passioni con noiì!
          </p>
          
          


          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
    );
  }
  
  export default NavbarComponent;