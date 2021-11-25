import React from 'react'
import {Card,Button} from 'react-bootstrap';



function MovieCard(props) {
    return (
        <div>
           
            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src={props.movie.posterURL}/>
              <Card.Body>
                <Card.Title>{props.movie.title}</Card.Title>
                <Card.Text>{props.movie.desc}</Card.Text>
                <Card.Text>{props.movie.year}</Card.Text>
                <Card.Text></Card.Text>
                
                <Button variant="primary" className="buyingBtn">Check</Button>
              </Card.Body>
            </Card>
            <br/>
        </div>
    )
}

export default MovieCard;
