// import logo from './logo.svg';
import './App.css';
import { MovieList } from './MovieList';
 import {useState} from 'react';
 import * as React from 'react';
// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,Redirect
} from "react-router-dom";



// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';




export default function App() {
const INITIAL_MOVIES=[
{
name:"The Lion King",
poster:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/078277ed-5380-4deb-b166-997beba79634/dd9d7mn-f61245cb-266b-469d-8433-061d911c5005.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA3ODI3N2VkLTUzODAtNGRlYi1iMTY2LTk5N2JlYmE3OTYzNFwvZGQ5ZDdtbi1mNjEyNDVjYi0yNjZiLTQ2OWQtODQzMy0wNjFkOTExYzUwMDUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.qiixeWj8ZLhL9gZlSwWga9m7DxrI1FUOxxGlCUnnysg",
rating:8.5,
summary: "The story of The Lion King is the story of a lion cubs journey to adulthood and acceptance of his royal destiny. Son of Mufasa, Simba witnesses the murder of his father by Scar, who drives him away from the kingdom. Lost in the jungle, he meets the famous Timon & Pumba, where he will learn  Hakuna Matata "
},
{
    name:"Aladdin",
    poster:"https://tse3.mm.bing.net/th?id=OIP.MPoPZc3_hLlHqKcrmZ9u1AHaLH&pid=Api&P=0&w=300&h=300",
    rating:6.9,
    summary:"A kind-hearted street urchin and a power-hungry Grand Vizier vie for a magic lamp that has the power to make their deepest wishes come true."
    },
    {
        name:"Toy Story",
        poster:"http://www.cultjer.com/img/ug_photo/2015_09/32772420150915154419.jpg",
        rating:8.3,
        summary:"Toy Story is about the 'secret life of toys' when people are not around. When Buzz Lightyear , a space-ranger, takes Woody's place as Andy's favorite toy, Woody doesn't like the situation and gets into a fight with Buzz. Accidentaly Buzz falls out the window and Woody is accused by all the other toys of having killed him."
        },
        {
            name:"Mulan",
            poster:"https://tse1.mm.bing.net/th?id=OIP.cSfAqOGAaItXT97UtEeTrgHaK9&pid=Api&P=0&w=300&h=300",
            rating:5.7,
            summary:"To save her father from death in the army, a young maiden secretly goes in his place and becomes one of China's greatest heroines in the process."
        },
        {
                name:"Frozen",
                poster:"https://tse4.mm.bing.net/th?id=OIP.iH0GOTPm9S2O4Dwivr44cgHaHa&pid=Api&P=0&w=300&h=300",
                rating:7.4,
                summary:"When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition."
        },
        {
                    name:"The Jungle Book",
                    poster:"https://fanart.tv/fanart/movies/9325/movieposter/the-jungle-book-523470dda735e.jpg",
                    rating:7.6,
                    summary:"After a threat from the tiger Shere Khan forces him to flee the jungle, a man-cub named Mowgli embarks on a journey of self discovery with the help of panther Bagheera and free-spirited bear Baloo."
        }     
    
            ];
            
            
     
            const [movies,setMovies]=useState(INITIAL_MOVIES);
        
            //copy the movie list and add the new movie 
            return(
               <div className="App">
               <nav>
               <Link to="/>">Home</Link>
               <Link to="/movies">Movies</Link>
               <Link to="/add-movies">Add Movies</Link>
               <Link to="/color-game">Color Game</Link>
               </nav>
               <Switch>
               <Route exact path="/>">
               <Welcome/></Route>
               <Route path="/films">
               <Redirect to="/movies"/>
               </Route>
               <Route path="/movies/:id">
               <MovieList movies={movies}/>  
               </Route>
               
               <Route path="/add-movies">
               <AddMovie movies={movies} setMovies={setMovies}/>
               </Route>
               <Route path="/color-game">
               <AddColor/>   
               </Route>
               <Route path="**">
                       <NotFound/>        
                    </Route>
               
               </Switch>
             
               {/* Higher order component:(HOC) when two component needs the same data, put the data in common parent component(app) */}
               </div>
             );
}

function Welcome(){
return (
<div>
<h2>Welcome to Movie App</h2>
<img className="welcome-img" src="https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/fc/88/b4/fc88b47d-ab34-5bb1-c980-0bc58d541a0a/pr_source.jpg/1000x1000bb.jpg" alt="Home page"/>
</div>);
}

function NotFound(){
return(
<div className="not-found-container">
<h2>Not Found 404</h2>
<img src="https://media.giphy.com/media/ljKsAPEnI0AJG/giphy.gif" alt="NotFound"/>
</div>);
}

function AddMovie({movies,setMovies}){
       
       const [name,setName]=useState("");
       const [poster,setPoster]=useState("");
       
       const [rating,setRating]=useState("");
       
       const [summary,setSummary]=useState("");
       const addMovie=()=>{
        console.log("Adding movies..." ,name,poster,rating,summary);
        //creating new object
        const newMovie={
      name,
      poster,
      rating,
      summary
      };
      
      console.log(newMovie);
        setMovies([...movies,newMovie]);
    };
    return(
<div className="add-movie-form">
               
               <TextField
               value={name}
               onChange={(event)=>setName(event.target.value)}
               id="standard-basic" label="Name" variant="standard" />
               <TextField
               value={poster}
               onChange={(event)=>setPoster(event.target.value)}
               id="standard-basic" label="Poster" variant="standard" />
                <TextField
               value={rating}
               onChange={(event)=>setRating(event.target.value)}
               id="standard-basic" label="Rating" variant="standard" />
             
             <TextField
               value={summary}
               onChange={(event)=>setSummary(event.target.value)}
               id="standard-basic" label="Summary" variant="standard" />

<Button onClick={addMovie} variant="outlined">Add Movie</Button>
            
        
        </div>
    );
}
function AddColor(){
const [color,setColor]=useState("pink");
 //const colors=["teal","orange","lavender"];
const [colors,setColors]=useState(["teal","orange","lavender"]);
const styles={backgroundColor:color};

return(
<div className="add-color-form">
{/* <input 
value={color}
onChange={(event)=>setColor(event.target.value)
} style={styles} placeholder="Enter a color" /> */}

<TextField value={color}
onChange={(event)=>setColor(event.target.value)
} style={styles}  id="standard-basic" label="Enter a color" variant="standard" />

{/* <button onClick={()=>setColors([...colors,color])}>Add Color</button> */}
<Button onClick={()=>setColors([...colors,color])} variant="outlined">Add Color</Button>

{
colors.map((clr,index)=><ColorBox key={index} color={clr}/>

)}

</div>);
}

function ColorBox({color}){
const styles={backgroundColor:color,
height:"25px",
width:"250px",
marginTop:"10px"};
return( 
<div style={styles}></div>);
}
