import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import MovieCard from './MovieCard';

// import { Container, Row, Col } from 'react-bootstrap';

function MovieList(props) {
    return (
        <div>
            <Container>
                <Row>
                    {props.movies.map((movie)=>
                        { return(
                    <Col >
                        <MovieCard movie={movie}/>
                    </Col>
            )})}
                </Row>
            </Container>
            
        </div>
    )
}

export default MovieList
