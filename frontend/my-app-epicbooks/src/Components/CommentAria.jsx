import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import { Alert } from "react-bootstrap";




const url ='https://striveschool-api.herokuapp.com/api/comments/'
const apikey ='dni7uipNpKUauJb6nco9YGtmDe8jRocbndSGYuXRiIhPn9vBc3sYcPqC'


export default function CommentAria ({ asin }) {
    const[comments, setComments] = useState([])
    useEffect(() => {
        if (!asin) return
        const getComments = async () => {
            try {
        const response = await fetch(
            `${url}${asin}`,
            {
                headers:{
                    Authorization: apikey,
                },
            }
          )
          console.log(response)
          if(response.ok){
            const comments = await response.json()
            setComments()

          }else{
            console.Console('error')
          }
            } catch(error){
                console.log(error)
            }
        }
    })
  return (
    <div style={{ borderTop: "1px solid #ccc", padding: "1rem" }}>
      <h4>Comments</h4>
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      {comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        comments.map((comment, i) => <p key={i}>- {comment}</p>)
    
      )}
      <CommentList/>
    </div>
  );
};

