import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MovieCard from "./MovieCard";

const Filter = (props) => {
  return (
    <div className="col col-sm-4">
      <input
        className="form-control"
        value={props.searchValue}
        onChange={(e) => props.setSearchValue(e.target.value)}
        placeholder="Type to search..."
      ></input>
      <Container>
        <Row>
          {props.movies
            .filter((movie) =>
              movie.title
                .toLowerCase()
                .includes(props.searchValue.toLowerCase())
            )
            .map((movie) => (
              <Col>
                <MovieCard movie={movie} />
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default Filter;
// {if(props.searchValue.toLowerCase().includes(movie.title.toLowerCase())) return(
