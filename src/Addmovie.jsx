import React, {useState } from "react";
import { Modal, Button } from "react-bootstrap";
const AddModal = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Button variant="primary" onClick={() => setShow(!show)}>
        +
      </Button>
      <Modal show={show} onHide={() => setShow(!show)}>
        <Modal.Header closeButton>
          <Modal.Title>Add new Movie</Modal.Title>        
        </Modal.Header>
        <Modal.Body>
          <div>
            <div>
              <label className="input">Title:</label>               
              <input type="text" name="name" />
            </div>
            <div>
              <label className="input">Image:</label>           
              <input type="text" name="image" />
            </div>
            <div>
              <label className="input">Rating:</label>           
              <input type="text" name="rating" />
            </div>
            <div>
              <label className="input">Year:</label>              
              <input type="text" name="year" />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(!show)}>
                          Close             
          </Button>
          <Button variant="primary">
                          Add Movie             
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default AddModal;