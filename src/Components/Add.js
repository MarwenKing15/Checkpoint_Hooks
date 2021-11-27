import { useState} from "react";
import {Modal,Form,Button,Card} from 'react-bootstrap'
// import MovieCard from "./MovieCard";


function Add({movies,setMovies,movieName, setMovieName,movieURL, setMovieURL,movieYear, setMovieYear,movieDesc, setMovieDesc,movieRating, setMovieRating}) {


const [show, setShow] = useState(false);
// const [movieName, setMovieName] = useState('');
// const [movieURL, setMovieURL] = useState('');
// const [movieDesc, setMovieDesc] = useState('');
// const [movieYear, setMovieYear] = useState(0);
// const [movieRating, setMovieRating] = useState(1);



  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


// var [movies, setMovies]=useState([])

const handleName=(e)=>{setMovieName(e.target.value)};
const handleURL=(e)=>{setMovieURL(e.target.value)};
const handleDesc=(e)=>{setMovieDesc(e.target.value)};
const handleYear=(e)=>{setMovieYear(e.target.value)};
const handleRating=(e)=>{setMovieRating(e.target.value)};




const handleAdd=()=>{

 const movie={movieName,movieURL,movieDesc,movieYear,movieRating}

 console.log(movie);

// setMovies(() => ({
//   newMovies: [...movies,movie]
// }))

setMovies(movies.push())
}


    return (
         <div className="addMovie">
        {/* <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Movie's Name</Form.Label>
                <Form.Control type="text" placeholder="Movie's Name" className='movieName' onChange={handleAdd}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Movie's Poster URL</Form.Label>
                <Form.Control type="URL" placeholder="Movie's Poster URL" className='moviePoster' onChange={handleAdd}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Year</Form.Label>
                <Form.Control type="number" placeholder="Year" min="1900" className='movieYear' onChange={handleAdd}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} className='movieDesc' onChange={handleAdd}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Rating</Form.Label>
                <Form.Control type="number" placeholder="Rating" max='10' step='0.1' className='movieRating' onChange={handleAdd}/>
              </Form.Group>

              <Button variant="primary" type="submit">Add</Button>
            </Form>
          </Card.Body>
        </Card> */}

      <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

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
    </>

              {/* <MovieCard movie={movie}/> */}

      </div>
    )
  }

export default Add
