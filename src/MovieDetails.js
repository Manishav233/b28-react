import * as React from 'react';
import { useParams } from "react-router-dom";

import Button from '@mui/material/Button';
import {useHistory} from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

export function MovieDetails({ movies }) {
  const { id } = useParams();
  const movie = movies[id];
  const history = useHistory();
  const styles = { color: movie.rating > 8 ? "green" : "crimson", fontWeight: "bold" };
  return (
    <div>
      <iframe width="100%"
        height="500"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
      </iframe>
      <div className="movie-detail-container">
        <div className="movie-specs">
          <h1 className="movie-name">{movie.name}</h1>
          <p className="movie-rating" style={styles}>⭐{movie.rating} </p>
        </div>
        <h1 className="movie-summary">{movie.summary}</h1>
        <Button onClick={()=>{
 
      history.goBack();}}
      
      variant="contained" startIcon={<KeyboardBackspaceIcon/>}>
  Back
</Button>
      </div>
    </div>);
}

