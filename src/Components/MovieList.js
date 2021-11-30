import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import MovieCard from "./MovieCard";
import MovieListHeading from "./MovieListHeading";

import "./Styles/MovieList.css";

function MovieList({ movies, searchValue, value }) {
  return (
    <div className="body">
      <br />
      <MovieListHeading heading="Movies" />
      <br />
      <Container>
        <Row>
          {movies
            .filter(
              (movie) =>
                movie.title.toLowerCase().includes(searchValue.toLowerCase()) &&
                movie.rating >= value
            )
            .map((movie) => (
              <Col>
                <MovieCard key={movie.id} movie={movie} />
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
}

export default MovieList;
