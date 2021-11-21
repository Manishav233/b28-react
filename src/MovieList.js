import { Movie } from "./Movie";

// );
export function MovieList({ movies }) {
  return (
    <section className="movie-list">
      {movies.map(({name,poster,rating,summary},index) => (
        <Movie name={name} posture={poster} rate={rating} summary={summary} id={index}/>
      ))}
    </section>
    
    
  //   <section className="movie-list">
  //   {movies.map((ur,index) => (
  //     <Movie name={ur.name} posture={ur.poster} rate={ur.rating} summary={ur.summary} id={ur.index}/>
  //   ))}
  // </section>
  );
}
