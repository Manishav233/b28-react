import { useState } from 'react';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useHistory} from 'react-router-dom';

export function AddMovie({ movies, setMovies }) {

  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");

  const [rating, setRating] = useState("");

  const [summary, setSummary] = useState("");
  const [trailer,setTrailer]= useState(" ");
  const history = useHistory();
  const addMovie = () => {
    console.log("Adding movies...", name, poster, rating,trailer, summary);
    //creating new object
    const newMovie = {
      name,
      poster,
      rating,
      trailer,
      summary
    };

    console.log(newMovie);
    setMovies([...movies, newMovie]);
    history.push("/movies/");
  };
  return (
    <div className="add-movie-form">

      <TextField
        value={name}
        onChange={(event) => setName(event.target.value)}
        id="standard-basic" label="Name" variant="standard" />
      <TextField
        value={poster}
        onChange={(event) => setPoster(event.target.value)}
        id="standard-basic" label="Poster" variant="standard" />
      <TextField
        value={rating}
        onChange={(event) => setRating(event.target.value)}
        id="standard-basic" label="Rating" variant="standard" />
        
        <TextField
        value={trailer}
        onChange={(event) => setTrailer(event.target.value)}
        id="standard-basic" label="Trailer" variant="standard" />
        
         <TextField
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
        id="standard-basic" label="Summary" variant="standard" />

   
    

      <Button onClick={addMovie} variant="outlined">Add Movie</Button>


    </div>
  );
}
