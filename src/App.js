import { useState, useRef} from "react";
import './App.css';
import MovieList from './Components/MovieList';
// import Add from "./Components/Add";
import {Form,Card,Button} from 'react-bootstrap'

function App() {
var [movies, setMovies]=useState([
  {posterURL:"https://m.media-amazon.com/images/I/A1wnJQFI82L._AC_SY879_.jpg",
  title:'Star Wars: Episode IV - A New Hope',
  year:'1977',
  rating: 8,
  desc:'Good Movie'
  },
])
const [show, setShow] = useState(false)
const [btnStatus, setbtnStatus] = useState(false)


   const handleShowPerson=()=>{
      setShow(!show);
      setbtnStatus(!btnStatus );
  }




const movieName= useRef()
const movieURL= useRef()
const movieDesc= useRef()
const movieYear= useRef()
const movieRating= useRef()


// const handleChange = (e) => {
//         this.setState({
//             inputText: e.target.value
//         })
//     }

const add=(e)=>{
//   const movie={
//     title:movieName.current.value,
//     year:movieYear.current.value,
//     posterURL:movieURL.current.value,
//     rating:movieRating.current.value,
//     desc:movieDesc.current.value}

// setMovies(() => ({
//   movies: movies=[...movies, movie]
// }))

// setMovies(movies.push(...movie))

setMovies({
            movies: e.target.value
        })

 }

 


return (
    <div className="App">

      

{show && 
<div className="addMovie">
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Movie's Name</Form.Label>
                <Form.Control type="text" placeholder="Movie's Name" ref={movieName}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Movie's Poster URL</Form.Label>
                <Form.Control type="URL" placeholder="Movie's Poster URL" ref={movieURL}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Year</Form.Label>
                <Form.Control type="number" placeholder="Year" min="1900" ref={movieYear}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} ref={movieDesc}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Rating</Form.Label>
                <Form.Control type="number" placeholder="Rating" max='10' step='0.1' ref={movieRating}/>
              </Form.Group>

              <Button variant="primary" type="submit" onClick={()=>{add();}}>Add</Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
}
<div class="box-2">
          <div class="btn btn-two">
            <span 
            onClick={() => {
          handleShowPerson();}}>
              {btnStatus?"Cancel":"Add"}</span>
          </div>
        </div>  
      <MovieList movies={movies} setMovies={setMovies}/>
    </div>
  );
}


export default App;

