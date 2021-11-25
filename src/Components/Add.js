import { useState,useRef} from "react";
import {Modal,Form,Button} from 'react-bootstrap'
import MovieCard from "./MovieCard";


function Add() {

// const movieName= useRef()
// const movieURL= useRef()
// const movieDesc= useRef()
// const movieYear= useRef()
// const movieRating= useRef()
  


var [movies, setMovies]=useState([])




const handleAdd=(e)=>{

const movie={
    title:e.movieName.value,
    year:e.movieYear.value,
    posterURL:e.moviePoster.value,
    rating:e.movieRating.value,
    desc:e.movieDesc.value}

setMovies(() => ({
  movie: [movie]
}))

// setMovies(movies.push(...movie))
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

        <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Modal title</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Movie's Name</Form.Label>
                <Form.Control type="text" placeholder="Movie's Name" className='movieName' onChange={handleAdd}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Movie's Poster URL</Form.Label>
                <Form.Control type="URL" placeholder="Movie's Poster URL" className='moviePoster' onChange={handleAdd}/>
              </Form.Group>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">Close</Button>
    <Button variant="primary">Save changes</Button>
  </Modal.Footer>
</Modal.Dialog>

              <MovieCard movie={movies}/>

      </div>
    )
  }

export default Add
