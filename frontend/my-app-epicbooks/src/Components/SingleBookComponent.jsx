import React, { useState } from "react";
import {Card, } from "react-bootstrap";
import CommentAria from "./CommentAria";


export default function SingleBookComponent({book, selected, setSelected}){
// console.log(book)
    //  const [selected, setSelected] = useState(false)
    
    return(
        <>
        
        <Card style={{with: '18rem',
            border: selected === book?.asin ? '2px solid red' : '1px solid #cc',
            cursor:'pointer'}}
            onClick={() => setSelected(book.asin)}
            className="m-2"
        >
            
            <Card.Img variant="top" src={book?.img} alt={book?.title}/>
            <Card.Body>
                <Card.Title>{book?.title}</Card.Title>
            </Card.Body>
            
        </Card>
        
       
        </>
        
    )
}