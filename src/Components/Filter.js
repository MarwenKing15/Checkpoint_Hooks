import React,{useState} from "react";

import { Rate } from 'antd';
import { Container, Row, Col } from "react-bootstrap";

import './Styles/Filter.css';

import MovieList from "./MovieList";


const Filter = (props) => {

const [value, setValue] = useState(0);

  const handleChange = value => {
    setValue( value );
  };

  return (
    <div>
    <Container >
    <div className="headerContainer">
    <Row>
      <Col>
      <input
        className="inputSection"
        value={props.searchValue}
        onChange={(e) => props.setSearchValue(e.target.value)}
        placeholder="Type to search..."
      ></input>
      </Col>
      </Row>
          <Row>

      <Col>
        <span >
        <Rate  onChange={handleChange} value={value} />
      </span>
      </Col>
      </Row>
      </div>
      </Container>
      <MovieList movies={props.movies} searchValue={props.searchValue} value={value}/>
    </div>
  );
};

export default Filter;
