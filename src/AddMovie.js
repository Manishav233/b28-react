import { useState } from 'react';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function AddMovie({ movies, setMovies }) {

  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");

  const [rating, setRating] = useState("");

  const [summary, setSummary] = useState("");
  const addMovie = () => {
    console.log("Adding movies...", name, poster, rating, summary);
    //creating new object
    const newMovie = {
      name,
      poster,
      rating,
      summary
    };

    console.log(newMovie);
    setMovies([...movies, newMovie]);
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
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
        id="standard-basic" label="Summary" variant="standard" />

      <Button onClick={addMovie} variant="outlined">Add Movie</Button>


    </div>
  );
}
