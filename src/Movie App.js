import { useState } from 'react';
import { Counter } from './Counter';
import IconButton from '@mui/material/IconButton';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

import {useHistory} from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import InfoIcon from '@mui/icons-material/Info';

export function Movie({ name, posture, rate, summary,id,deleteButton,editButton}) {

  const [show, setShow] = useState(true);

  const styles = { color: rate > 8 ? "green" : "crimson", fontWeight: "bold" };

  const summaryStyles = { display: show ? "block" : "none" };
  const history = useHistory();
  return (
    <Card className="movie-container">
      <img className="movie-pic" src={posture} alt={name} />
     <CardContent> <div className="movie-specs"><h1 className="movie-name">{name}</h1>
      <IconButton
      onClick={()=>{
      console.log(id);
      history.push("/movies/"+id);
      
      }}
      className="movie-show-button"
      color="primary"
      aria-label="info icon"
      >
      <InfoIcon/>
      </IconButton>
      
      
      <IconButton onClick={() => setShow(!show)} className="movie-show-button" color="primary" aria-label="hide">
   {show? <ExpandLess /> :<ExpandMore /> }
      </IconButton>
        <h1 className="movie-rating" style={styles}>⭐{rate} </h1>
      </div>

      {/* <IconButton  onClick={() => setShow(!show)} className="movie-show-button">{show ? "Hide" : "Show"}  aria-label="delete"
 Description
</IconButton> */}


      {/* <button onClick={() => setShow(!show)} className="movie-show-button">{show ? "Hide" : "Show"} Description
      </button>  */}

      <h1 className="movie-summary" style={summaryStyles}>{summary}</h1>
      {/* Conditioning rendering --{show ?<p className="movie-summary">{summary}</p>: " "}</p>} */}
      <Counter />
      <div className="del_edit">{deleteButton} {editButton}</div>
      </CardContent>
    </Card>
  );
}
