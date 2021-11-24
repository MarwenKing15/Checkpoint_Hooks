import { useState,useRef } from "react";
import {Form,Button,Card} from 'react-bootstrap'
import MovieList from "./MovieList";


function Add() {

const movieName= useRef()
const movieURL= useRef()
const movieDesc= useRef()
const movieYear= useRef()
const movieRating= useRef()
  


const [movies, setMovies]=useState([])



const add=()=>{

const movie={
    title:movieName.current.value,
    year:movieYear.current.value,
    posterURL:movieURL.current.value,
    rating:movieRating.current.value,
    desc:movieDesc.current.value}

setMovies(prevMovie => ({
  movies: [...prevMovie,movie]
}))

// setMovies(movies.push(...movie))
}

    return (
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

              <Button variant="primary" type="submit" onSubmit={add}>Add</Button>
            </Form>
          </Card.Body>
        </Card>

              <MovieList movies={movies}></MovieList>

      </div>
    )
  }

export default Add
