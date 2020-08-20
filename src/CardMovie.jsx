import React from "react";
import "./App.css";
import Movie from "./movieList";
import { Card, Button } from "react-bootstrap";
import StarRatingComponent from 'react-star-rating-component'


const CardMovie = ({cardMovie}) => {

  return (  

  <Card style={{ width: '18rem' }}>
    <div className="test">
  <Card.Img  variant="top" src={cardMovie.img}/>
  <Card.Body>
    
<Card.Title>{cardMovie.title}</Card.Title>
    <Card.Text>
{cardMovie.description}
<ul>
  <li>Première sortie:<a>{cardMovie.year}</a></li>
  <li>Scénario :<a>{cardMovie.Scénario }</a> </li>
<li>Réalisateur: <a>{cardMovie.Réalisateur}</a></li>
</ul>  



    </Card.Text>
    <StarRatingComponent style={{ backgroundColor: 'white',}}
          name="rate1" 
          starCount={5}
           
          value={cardMovie.rating}
        />
        
  </Card.Body>
  </div> 
</Card>

  )
};
export default CardMovie;