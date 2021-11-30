import React from "react";

import { Card } from "react-bootstrap";
import Rating from "@mui/material/Rating";

import "./Styles/MovieCard.css";

function MovieCard(props) {
  return (
    <div className="cont">
      <div class="main-container">
        <img
          src={props.movie.posterURL}
          alt={props.movie.title}
          className="poster image-container"
          width="320px"
        />
        <Card.Body className="info-container">
          <Card.Title className="crd__title">{props.movie.title}</Card.Title>
          <Card.Text className="cardDesc">{props.movie.desc}</Card.Text>
          <Card.Text className="cardDesc">{props.movie.year}</Card.Text>
          <Rating
            name="read-only"
            value={props.movie.rating}
            readOnly
            className="cardDesc"
          />
          <br />
        </Card.Body>
      </div>
      <br />
    </div>
  );
}

export default MovieCard;
