import { useState} from "react";
import { Modal,Button,Form,Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle} from '@fortawesome/free-solid-svg-icons'

import './App.css';
import Filter from './Components/Filter'
// import Add from "./Components/Add";


function App() {
var [movies, setMovies]=useState([
    {
      posterURL:'https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
      title:'Star Wars: Episode IV - A New Hope',
      year:'1977',
      rating: 3,
      desc:'Good Movie'
    },

    {    
      posterURL:'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
			title: 'Star Wars: Episode V - The Empire Strikes Back',
			year: '1980',
			rating: 4,
			desc: 'Good Movie',
		},
		{			
      posterURL:'https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
			title: 'Star Wars: Episode VI - Return of the Jedi',
			year: '1983',
			rating: 4,
			desc: 'Good Movie',
		},
    {
      posterURL:"https://m.media-amazon.com/images/M/MV5BZmRjODgyMzEtMzIxYS00OWY2LTk4YjUtMGMzZjMzMTZiN2Q0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
      title:'Red Notice',
      year:'2021',
      rating: 3,
      desc:'Netflix Movie'
  },
  {
      posterURL:"https://image.tmdb.org/t/p/w220_and_h330_face/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      title:'The Dark Knight',
      year:'2008',
      rating: 5,
      desc:'Best Movie Everr!!'
  },
  {
      posterURL:"https://image.tmdb.org/t/p/w220_and_h330_face/pRn3TJHbAqCAO6U8Dw5DayVUuX3.jpg",
      title:'Gladiator',
      year:'2000',
      rating: 4,
      desc:'Iconic!!'
  },
  {
      posterURL:"https://image.tmdb.org/t/p/w220_and_h330_face/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
      title:'Avengers: Endgame',
      year:'2019',
      rating: 5,
    desc:'One of the best movies of the MCU'
  },
  { 
      posterURL:"https://randommer.io/images/movies/23483.webp",
      title:'Kick-Ass',
      year:'2010',
      rating: 2,
      desc:'Mehhhh'
  },
  {
      posterURL:"https://image.tmdb.org/t/p/w220_and_h330_face/g5pxxYlRJU7bG6ijgDbewXonmSY.jpg",
      title:'The Fast and the Furious: Tokyo Drift',
      year:'2006',
      rating: 4,
      desc:'Best Racing Movie Ever!!!'
  },
])


const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


const [searchValue, setSearchValue] = useState('');
const [movieName, setMovieName] = useState('');
const [movieURL, setMovieURL] = useState('');
const [movieDesc, setMovieDesc] = useState('');
const [movieYear, setMovieYear] = useState(0);
const [movieRating, setMovieRating] = useState(1);

const handleName=(e)=>{setMovieName(e.target.value)};
const handleURL=(e)=>{setMovieURL(e.target.value)};
const handleDesc=(e)=>{setMovieDesc(e.target.value)};
const handleYear=(e)=>{setMovieYear(e.target.value)};
const handleRating=(e)=>{setMovieRating(e.target.value)};

const handleAdd=()=>{

 const movie={movieName,movieURL,movieDesc,movieYear,movieRating}

 console.log(movie);

setMovies(() => ({
  newMovies: [...movies,movie]
}))

// setMovies(movies.push())
}





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
      

 {/* <Add movies={movies} setMovies={setMovies}
  movieName={movieName} setMovieName={setMovieName}
  movieURL={movieURL} setMovieURL={setMovieURL}
  movieYear={movieYear} setMovieYear={setMovieYear}
  movieDesc={movieDesc} setMovieDesc={setMovieDesc}
  movieRating={movieRating} setMovieRating={setMovieRating}
 /> */}

<FontAwesomeIcon icon={faPlusCircle} size="6x" onClick={handleShow}/>

<div>
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Form>
                <Form.Label>Movie's Name</Form.Label>
                <Form.Control type="text" placeholder="Movie's Name" value={movieName} onChange={handleName} />

                <Form.Label>Movie's Poster URL</Form.Label>
                <Form.Control type="URL" placeholder="Movie's Poster URL" value={movieURL} onChange={handleURL} />

                <Form.Label>Year</Form.Label>
                <Form.Control type="number" placeholder="Year" min="1900" value={movieYear} onChange={handleYear} />

                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} value={movieDesc} onChange={handleDesc} />

                <Form.Label>Rating</Form.Label>
                <Form.Control type="number" placeholder="Rating" max='5' step='1' value={movieRating} onChange={handleRating} />
            </Form>
          </Card.Body>
        </Card> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancle
          </Button>
          <Button variant="primary" onClick={()=>{handleClose();handleAdd();}}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

</div>
    </div>
  );
}


export default App;

