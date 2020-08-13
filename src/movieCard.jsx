import React from "react";
import "./App.css";
import Movie from "./movieList";
import { Card, Button } from "react-bootstrap";


const CardMovie = (props) => {
  return (
    <div>
      
      <Card  style={{ width: '18rem' }}>
        {props.cardMovie.mpa(e) => (
          <div>
  <Card.Img variant="top" src={e.img} alt="" />
  <Card.Body>
  <Card.Title> Movie{e.title}</Card.Title>
    <Card.Text>
      decription: {e.description}
    </Card.Text>
    <Card.year>
      {e.year}
    </Card.year>
  <Card.rating>
    {e.rating}
  </Card.rating>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
  </div>
)}
</Card>
</div>

};
export default CardMovie;
