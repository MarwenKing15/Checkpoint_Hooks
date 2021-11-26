import React,{useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import MovieCard from "./MovieCard";
import MovieListHeading from "./MovieListHeading";
import SearchRates from "./SearchRates";


const Filter = (props) => {

const [rate, setRate] = useState(1);

const handleCallback=(childData)=>{
  setRate(childData)
}

  return (
    <div>
    <div className="col col-sm-4">
      <input
        className="form-control"
        value={props.searchValue}
        onChange={(e) => props.setSearchValue(e.target.value)}
        placeholder="Type to search..."
      ></input>
      <SearchRates parentCallback = {handleCallback}> {rate} </SearchRates>
      </div>
      <br/>
            <MovieListHeading heading='Movies' />
<Container>
                <Row>
          { props.movies
            .filter((movie) => movie.rating>=rate ||
              movie.title
                .toLowerCase()
                .includes(props.searchValue.toLowerCase())
            )
            .map((movie) => (
            <Col >
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
