import { useState} from "react";
import { Modal,Button,Form,Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle} from '@fortawesome/free-solid-svg-icons';

import './App.css';

import Filter from './Components/Filter';
import Footer from "./Components/Footer";

const intiMovies=[{
      posterURL:'https://vistapointe.net/images/star-wars-episode-iv-a-new-hope-2.jpg',
      title:'Star Wars: Episode IV - A New Hope',
      year:'1977',
      rating: 3,
      desc:'Good Movie'
    },

    {    
      posterURL:'https://i.pinimg.com/originals/f9/61/68/f96168f87134e8cc188e1482fc110339.jpg',
			title: 'Star Wars: Episode V - The Empire Strikes Back',
			year: '1980',
			rating: 4,
			desc: 'Good Movie',
		},
		{			
      posterURL:'https://vistapointe.net/images/star-wars-episode-vi-return-of-the-jedi--1.jpg',
			title: 'Star Wars: Episode VI - Return of the Jedi',
			year: '1983',
			rating: 4,
			desc: 'Good Movie',
		},
    {
      posterURL:"https://m.media-amazon.com/images/M/MV5BZmRjODgyMzEtMzIxYS00OWY2LTk4YjUtMGMzZjMzMTZiN2Q0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
      title:'Red Notice',
      year:'2021',
      rating: 3,
      desc:'Netflix Movie'
  },
  {
      posterURL:"https://i.pinimg.com/originals/d6/57/a4/d657a48442d85023b6960c1cd1e0464e.jpg",
      title:'The Dark Knight',
      year:'2008',
      rating: 5,
      desc:'Best Movie Everr!!'
  },
  {
      posterURL:"https://vistapointe.net/images/gladiator-wallpaper-4.jpg",
      title:'Gladiator',
      year:'2000',
      rating: 4,
      desc:'Iconic!!'
  },
  {
      posterURL:"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
      title:'Avengers: Endgame',
      year:'2019',
      rating: 5,
    desc:'One of the best movies of the MCU'
  },
  { 
      posterURL:"https://movieposters2.com/images/669813-b.jpg",
      title:'Kick-Ass',
      year:'2010',
      rating: 2,
      desc:'Mehhhh'
  },
  {
      posterURL:"https://m.media-amazon.com/images/I/71ql8kIrPKL._AC_SL1338_.jpg",
      title:'The Fast and the Furious: Tokyo Drift',
      year:'2006',
      rating: 4,
      desc:'Best Racing Movie Ever!!!'
  }];


function App() {
var [movies, setMovies]=useState(intiMovies)


const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


const [searchValue, setSearchValue] = useState('');
const [title, setTitle] = useState('');
const [posterURL, setPosterURL] = useState('');
const [desc, setDesc] = useState('');
const [year, setYear] = useState(1990);
const [rating, setRating] = useState(1);

const handleName=(e)=>{setTitle(e.target.value)};
const handleURL=(e)=>{setPosterURL(e.target.value)};
const handleDesc=(e)=>{setDesc(e.target.value)};
const handleYear=(e)=>{setYear(e.target.value)};
const handleRating=(e)=>{setRating(e.target.value)};

const handleAdd=()=>{

 const movie={posterURL,title,year,rating,desc}

 console.log(movie);

  const newMovies= [...movies, movie]
  console.log(newMovies);


setMovies(newMovies)
}




return (
    <div className="App">
      
        <Filter searchValue={searchValue} setSearchValue={setSearchValue} movies={movies}/>
      

<br/>
<FontAwesomeIcon icon={faPlusCircle} size="8x" color="white" onClick={handleShow}/>


<div>
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Form>
                <Form.Label>Movie's Name</Form.Label>
                <Form.Control type="text" placeholder="Movie's Name" value={title} onChange={handleName} />

                <Form.Label>Movie's Poster URL</Form.Label>
                <Form.Control type="URL" placeholder="Movie's Poster URL" value={posterURL} onChange={handleURL} />

                <Form.Label>Year</Form.Label>
                <Form.Control type="number" placeholder="Year" min="1900" value={year} onChange={handleYear} />

                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} value={desc} onChange={handleDesc} />

                <Form.Label>Rating</Form.Label>
                <Form.Control type="number" placeholder="Rating" max='5' step='1' value={rating} onChange={handleRating} />
            </Form>
          </Card.Body>
        </Card> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancle
          </Button>
          <Button variant="primary" onClick={()=>{handleClose();handleAdd();}}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      <Footer/>

</div>
    </div>
  );
}


export default App;

