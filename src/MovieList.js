import { Movie } from "./Movie";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


import {useHistory} from 'react-router-dom';
export function MovieList({ movies ,setMovies}) {
  const history = useHistory();
  return (
    <section className="movie-list">
      {movies.map(({name,poster,rating,summary},index) => (
        <Movie name={name} posture={poster} rate={rating} summary={summary} id={index}
                // deleteButton={<button>Delete</button>}

      deleteButton={<IconButton 
        className="delete_button" 
            onClick={()=>{
            console.log("Deleting",index);
            const deleteIdx=index;
            const remaining_movies= movies.filter((mv,idx)=>idx!=deleteIdx)
          console.log("remaining",remaining_movies);
         setMovies(remaining_movies);} }  
           aria-label="delete movie"
             color="error">
         
          
    <DeleteIcon/>
      </IconButton>}
       
      editButton={<IconButton 
        className="edit_button" 
            onClick={()=>history.push("/movies/edit/"+index)
            
           }  
           aria-label="edit movie"
             color="secondary">
         
          
    <EditIcon/>
      </IconButton>}
/>))}
    </section>
    
    
  //   <section className="movie-list">
  //   {movies.map((ur,index) => (
  //     <Movie name={ur.name} posture={ur.poster} rate={ur.rating} summary={ur.summary} id={ur.index}/>
  //   ))}
  // </section>
  );
}
