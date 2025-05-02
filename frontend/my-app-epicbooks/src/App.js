import './App.css';
import {Container,Row, Col } from 'react-bootstrap';
import AllTheBooksComponent from './Components/AllTheBooksComponent';
import NavbarComponent from './Components/NavbarComponent';
import SingleBookComponent from './Components/SingleBookComponent';
import MyFooterComponent from './Components/MyFooterComponent';
import CommentAria from './Components/CommentAria';
import WelcomeComponent from './Components/WelcomeComponent';
import { useState } from 'react';
import fantasyBooks from './data/fantasy.json'
import CommentList from './Components/CommentList';

function App() {
  const [searchBook, setSearchBook] =useState("");
  const [selected, setSelected] = useState("")
  const [selectedBooks, selectedBook] =useState("")
  
  return (
    <>
    <div className="App" style={{textAlign: "center", margin:"1rem"}}>
      <NavbarComponent  searchBook={searchBook} setSearchBook={setSearchBook}/>
      <WelcomeComponent/>
     
      <Container>
        <Row>
          <Col md={8} >
          <AllTheBooksComponent selected ={selected} setSelected = {setSelected} searchBook={searchBook}/>
          <SingleBookComponent/>
          <Col md={4}>
      <CommentAria asin={selected}/>
      <CommentList />
      </Col>
      
      <MyFooterComponent/>
          </Col>
        </Row>
      </Container>
      
    </div>
    </>
  );
}

export default App;
