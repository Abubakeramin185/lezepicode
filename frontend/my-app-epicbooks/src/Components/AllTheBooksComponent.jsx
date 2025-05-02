import React, { useState } from 'react';

import { Container,  Row, Col, Form } from 'react-bootstrap';
import SingleBookComponent from "./SingleBookComponent.jsx";
// import WelcomeComponent from './WelcomeComponent.jsx';



//importa i dati di file json
import fantasyBooks from '../data/fantasy.json';
import historyBooks from '../data/history.json';
import romanceBooks from '../data/romance.json';
import horroBooks from '../data/horror.json';
import scifiBooks from '../data/scifi.json';
import CommentList from './CommentList.jsx';


//unisci tuuti i libri in un unico array

const allBooks =[
  ...fantasyBooks,
  ...historyBooks,
  ...romanceBooks,
 ...horroBooks,
  ...scifiBooks,

];
const AllTheBooksComponent = ({searchBook, selected, setSelected}) => {
   //console.log(allBooks)
  
   const [books, setBooks] = useState(allBooks)
   //console.log(books)
   const [search, setSearch] = useState ()
   const [selectedBook, setSelectedBook] = useState(books)
   const handleSearch = (event) => {
    setSearch(event.target.value)
    console.log(search)

    const filteredBook = allBooks.filter(book => book.title.toLowerCase().includes(event.target.value.toLowerCase()))
    setBooks (filteredBook)
   }
    return(
        <>
        <form className='mt-4'>
          <Row>
            <Col className='mb-3'>
            <Form.Control placeholder="first name" onChange={handleSearch} />
            </Col>
          </Row>
          </form>
      
      <Container className="mt-4, mb-5">
          <Row >
            {books.map((book) => 
            <Col key={book.id} md={4}>
              < SingleBookComponent  book={book}  setSelected={setSelected} selected={selected} />
              <CommentList  books={books} selected={selected} setSelected={setSelected}/>
              </Col>
            //  <Col key={book.asin} md={3}>
            //  <Card className="mb-5">
            //  <Card.Img variant="top" src={book.img}/>
            //  <Card.Body>
            //  <Card.Title>{book.title}</Card.Title>
            //   </Card.Body>
            // </Card>
            //   </Col>
             )}
           
          </Row>
          </Container>
        </>

    )
  
}

export default AllTheBooksComponent;