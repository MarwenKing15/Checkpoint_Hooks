import React,{useState} from "react";
import { Rate } from 'antd';
import { Container, Row, Col } from "react-bootstrap";

import './Styles/Filter.css'

import MovieCard from "./MovieCard";
import MovieListHeading from "./MovieListHeading";

  const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const Filter = (props) => {

const [value, setValue] = useState(2);

  const handleChange = value => {
    setValue( value );
  };

  return (
    <div>
    <div className="col col-sm-4">
      <input
        className="form-control"
        value={props.searchValue}
        onChange={(e) => props.setSearchValue(e.target.value)}
        placeholder="Type to search..."
      ></input>
        <span >
        <Rate tooltips={desc} onChange={handleChange} value={value} />
        {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
      </span>
      </div>
      <br/>
            <MovieListHeading heading='Movies' />
<Container>
                <Row>
          { props.movies
            .filter((movie) =>
              movie.title
                .toLowerCase()
                .includes(props.searchValue.toLowerCase()) && movie.rating>=value
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
