import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import MovieCard from './MovieCard';

// import { Container, Row, Col } from 'react-bootstrap';

function MovieList(props) {
    return (
        <div>
            <Container>
                <Row>
                    {props.movies.map((movie,index)=>
                        { return(
                    <Col >
                        <MovieCard key={index} posterURL={movie.posterURL} title={movie.title} desc={movie.desc} year={movie.year}  rating={movie.rating}/>
                    </Col>
            )})}
                </Row>
            </Container>
            
        </div>
    )
}

export default MovieList
