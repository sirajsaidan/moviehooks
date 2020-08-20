import React, {useState } from "react";
import { Modal, Button } from "react-bootstrap";

const AddModal = (props) => {
    const [show, setShow] = useState(false);
  
const[movie,setMovie]=useState({
  'title':'',
  'img':'',
  'raiting':'',
  'year':'',

})

const handelchange = e=>{
  setMovie({...movie,[e.target.name]: e.target.value})
}


  return (
    <div>
      <Button variant="primary" onClick={() => setShow(!show)}>
      Add new Movie
      </Button>
      <Modal show={show} onHide={() => setShow(!show)}>
        <Modal.Header closeButton>
          <Modal.Title>Add new Movie</Modal.Title>        
        </Modal.Header>
        <Modal.Body>
          <div>
            <div>
              <label className="input">Title:</label>               
              <input type="text" name="title" placeholder="title" onChange={handelchange}/>
            </div>
            <div>
              <label className="input">Image:</label>           
              <input type="text" name="image" onChange={handelchange} />
            </div>
            <div>
              <label className="input">Rating:</label>           
              <input type="text" name="rating"  onChange={handelchange}/>
            </div>
            <div>
              <label className="input">Year:</label>              
              <input type="text" name="year" onChange={handelchange} />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(!show)}>
                          Close             
          </Button>
          <Button onClick={()=>{props.newmovie(movie);setShow(!show)}} variant="primary">
                          Add Movie             
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default AddModal;