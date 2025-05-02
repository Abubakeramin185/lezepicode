import React, { useState } from 'react';

import { Container,  Row, Col, Form} from 'react-bootstrap';
import SingleBookComponent from "./SingleBookComponent.jsx";



//importa i dati di file json
import fantasyBooks from '../data/fantasy.json';
import historyBooks from '../data/history.json';
import romanceBooks from '../data/romance.json';
import horroBooks from '../data/horror.json';
import scifiBooks from '../data/scifi.json';


//unisci tuuti i libri in un unico array

const allBooks =[
  ...fantasyBooks,
  ...historyBooks,
  ...romanceBooks,
 ...horroBooks,
  ...scifiBooks,

];
const AllTheBooksComponent = () => {
   //console.log(allBooks)
  
   const [books, setBooks] = useState(allBooks)
   console.log(books)
    return(
        <>
        <form>
          <Row>
            <Col>
            <Form.Control placeholder="first name"/>
            </Col>
            <Col>
              <Form.Control placeholder="last name" />
            
            </Col>
          </Row>
          </form>
      
      <Container className="mt-4, mb-5">
          <Row>
            {books.map((book) => {
            return  < SingleBookComponent key={book.asin} book={book} />

             //<Col key={book.asin} md={3}>
             //<Card className="mb-4">
             //<Card.Img variant="top" src={book.img}/>
             //<Card.Body>
             // <Card.Title>{book.title}</Card.Title>
             // </Card.Body>
            //</Card>
             // </Col>
            } )}
           
          </Row>
          </Container>
        </>

    )
  
}

export default AllTheBooksComponent;