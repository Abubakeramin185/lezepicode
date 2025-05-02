import React, { useEffect, useState } from "react";
import {Button, Form} from 'react-bootstrap'


const url ='https://striveschool-api.herokuapp.com/api/comments/'
const apikey ='dni7uipNpKUauJb6nco9YGtmDe8jRocbndSGYuXRiIhPn9vBc3sYcPqC'




export default function AddComment  (asin) {
    const [comment, setComment] = useState({
     comment: '',
     rate: 1,
     elementId: null,
    })
    useEffect(() =>{
    setComment((c) => ({
        ...c,
        elementId:asin,
    }))
    },[asin])

    const sendComment = async (e) => {
        e.preventDefault()
        try{
            const response = await fetch(
                url,
                {
                 method:'POST',
                 body: JSON.stringify(comment),
                 headers: {
                 'contente-type': 'application/json',
                 'Authorizaction': apikey,
                },
            }
            )
            if(response.ok) {
                alert('La tua recensione è stata inviata con successo')
                setComment({
                    comment:'',
                    rate: 1,
                    elementId: null,
                })
              }
           }catch(error) {
            console.log("invio fallito"+ error)
           }
    }
    return(
        <div className="my-3">
             <Form>
      <Form.Group className="mb-2" >
        <Form.Label>Recensione</Form.Label>
        <Form.Control type="text" placeholder="Scrivi qui la tua recensione..." />
        value={Comment.comment}
        onChange={(e) =>
        setComment({
            ...comment,
            comment: e.target.value,
        })
        }
    
        
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label></Form.Label>
        <Form.Control />
      </Form.Group>
    </Form>
    <Button variant="danger">Danger</Button>
    
        </div>
    );
};
