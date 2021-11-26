import { useState} from "react";
import './App.css';
import Filter from './Components/Filter'
import Add from "./Components/Add";


function App() {
var [movies, setMovies]=useState([
  {posterURL:'https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  title:'Star Wars: Episode IV - A New Hope',
  year:'1977',
  rating: 3,
  desc:'Good Movie'
  },

  {    
      posterURL:'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
			title: 'Star Wars: Episode V - The Empire Strikes Back',
			year: '1980',
			rating: 5,
			desc: 'Good Movie',
		},
		{			
      posterURL:'https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
			title: 'Star Wars: Episode VI - Return of the Jedi',
			year: '1983',
			rating: 4,
			desc: 'Good Movie',
		},
    {posterURL:"https://m.media-amazon.com/images/M/MV5BZmRjODgyMzEtMzIxYS00OWY2LTk4YjUtMGMzZjMzMTZiN2Q0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
  title:'Red Notice',
  year:'2021',
  rating: 5,
  desc:'Netflix Movie'
  },
])
// const [show, setShow] = useState(false)
// const [btnStatus, setbtnStatus] = useState(false)
const [searchValue, setSearchValue] = useState('');
const [movieName, setMovieName] = useState('');
const [movieURL, setMovieURL] = useState('');
const [movieDesc, setMovieDesc] = useState('');
const [movieYear, setMovieYear] = useState(0);
const [movieRating, setMovieRating] = useState(1);



  //  const handleShowPerson=()=>{
  //     setShow(!show);
  //     setbtnStatus(!btnStatus );
  // }

  




// const movieName= useRef()
// const movieURL= useRef()
// const movieDesc= useRef()
// const movieYear= useRef()
// const movieRating= useRef()




// const add=(e)=>{
//   const movie={
//     title:movieName.current.value,
//     year:movieYear.current.value,
//     posterURL:movieURL.current.value,
//     rating:movieRating.current.value,
//     desc:movieDesc.current.value}


//     console.log(movie)

// setMovies(() => ({
//   movies: movies=[...movies, movie]
// }))


//  }

 


return (
    <div className="App">
      <div className='row d-flex align-items-center mt-4 mb-4'>
      <div className='row'>
        <Filter searchValue={searchValue} setSearchValue={setSearchValue} movies={movies}/>
      </div>
    </div>
      

 <Add movies={movies} setMovies={setMovies}
  movieName={movieName} setMovieName={setMovieName}
  movieURL={movieURL} setMovieURL={setMovieURL}
  movieYear={movieYear} setMovieYear={setMovieYear}
  movieDesc={movieDesc} setMovieDesc={setMovieDesc}
  movieRating={movieRating} setMovieRating={setMovieRating}
 />

{/* <div class="box-2">
          <div class="btn btn-two">
            <span 
            onClick={() => {
          handleShowPerson();}}>
              {btnStatus?"Cancel":"Add"}</span>
          </div>
        </div>   */}
    </div>
  );
}


export default App;

