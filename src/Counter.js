import {useState} from 'react';
// import * as React from 'react';
import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';



export function Counter(){
    const [like,setLike]=useState(0);
    const [dislike,setDislike]=useState(0);
    // let like=10;
    return(
    
    
   <div className="counter-container">
    <IconButton 
  className="likes-dislikes" 
      onClick={()=>{
       setLike(like+1);
     } }  
     aria-label="like movie"
       color="primary">
   
    <Badge badgeContent={like} color="primary">
 👍
</Badge>
</IconButton>


 <IconButton 
  className="likes-dislikes" 
      onClick={()=>{
       setDislike(dislike+1);
     } }      aria-label="dislike movie"
       color="error">
  
  <Badge badgeContent={dislike} color="error">
 👎
</Badge>
</IconButton>

    </div>
    );
   }
    
       
        
    