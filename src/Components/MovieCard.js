import React from 'react'
import {Card,Button} from 'react-bootstrap';


function MovieCard(props) {
    return (
        <div>
           
            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src={props.posterURL}/>
              <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.desc}</Card.Text>
                <Card.Text>{props.year}</Card.Text>
                <Card.Text>{props.rating}</Card.Text>
                <Button variant="primary" className="buyingBtn">Check</Button>
              </Card.Body>
            </Card>
            <br/>
        </div>
    )
}

export default MovieCard;
