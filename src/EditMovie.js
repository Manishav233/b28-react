import { useState } from 'react';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useParams } from "react-router-dom";
import {useHistory} from 'react-router-dom';
export function EditMovie({ movies, setMovies }) {
    const { id } = useParams();
    const movie = movies[id];
  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);

  const [rating, setRating] = useState(movie.rating);

  const [summary, setSummary] = useState(movie.summary);
  const [trailer,setTrailer]= useState(movie.trailer);
  const history = useHistory();
  const editMovie = () => {
    console.log("Editing movies movies...", name, poster, rating,trailer, summary);
    //creating new object
    const updatedMovie = {
      name,
      poster,
      rating,
      trailer,
      summary
    };

    console.log(updatedMovie);
    setMovies([...movies, updatedMovie]);
    //replace the element in movie list(movie list must be a copy)
  const copyMovieList=[...movies];
  copyMovieList[id]=updatedMovie;
  setMovies(copyMovieList);
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

   
    

      <Button onClick={editMovie} variant="outlined">Save</Button>


    </div>
  );
}
