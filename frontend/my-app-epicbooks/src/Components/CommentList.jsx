import { useState } from  'react';
import{Button, Form} from 'react-bootstrap';



const CommentList = ({Comments, onDelete, onUpdate}) => {
   const [editinId, setEditngId] = useState(null);
   const [editText, setEditText] = useState('');
   


  return(
    <ul>
      {Comments.length < 0 ? (
        
        Comments.map((Comment) => {
          <li key={Comment.id}>
           {editinId === Comment.id ? (
            <>
            <Form.Control
            type="text"
            value={editText}
            onChange={(e) => (setEditText(e.target.value))}
            />
            <Button
             size="sm"
              onClick={() => {
                onUpdate(Comment.id, editText)
                setEditngId(null)
              }}
              >
                Salvare
            </Button>
            </>

           ) : (
            <>
            <p>{Comment.text} - {new Date(Comment.date).toLocaleDateString()}</p>
            <Button
             variant="danger"
             size="sm"
             onClick={() => onDelete(Comment.id)}
             >
              Eliminare
             </Button>
             <Button
             size="sm"
             onClick={() => {
              setEditngId(Comment.id)
              setEditText(Comment.text)
             }}
             >
             Modificare
             </Button>
            </>
           )}
          </li>

        })
      ) : (
        <p>Nessun commento ancora.</p>
      )}
    </ul>
  )
}

export default CommentList;