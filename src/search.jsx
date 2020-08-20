import React from "react";
import { MDBCol, MDBIcon } from "mdbreact";
import StarRatingComponent from 'react-star-rating-component'

const SearchMovie = (props) => {
  
 const onStarClick =(nextValue, prevValue, name)=> {
    props.setStarKeyworld(nextValue)
  }
 
  
  return (
    
    <MDBCol md="3">

      <div className="search"> 
      <StarRatingComponent className="star"
          name="rate1" 
          starCount={5}
          value={props.StarKeyworld}
          emptyStarColor={'	#FFFFFF'}
          onStarClick={onStarClick}
        />
      <form className="form-inline mt-4 mb-4">
        <MDBIcon icon="search" /> 
       
        <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" onChange={e => props.setKeyworld(e.target.value)}/> {/*setKeyworld hya setert mte3 il keyworld 7atinha bech kif nektb fil input issir il changemnet w yt9ayd fil parent */}
       
      </form>
      
        </div>
    </MDBCol>
  );
}

export default SearchMovie;