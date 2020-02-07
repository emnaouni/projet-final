import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { addmedicaments } from '../../actions/ListMedicamentActions';
import { connect } from "react-redux"



class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }
  handleShow = () => {
    this.setState({ show: !this.state.show });
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  add = () => {
    this.props.addmedicaments(this.state);
    this.setState({ show: false });
  };
  render() {
    return (
      <div >
        <Button variant="primary" onClick={this.handleShow}>
          +
        </Button>

        <Modal show={this.state.show} onHide={this.handleShow} className="Modal_Add_Medicament">
          <Modal.Header closeButton>
            <Modal.Title>Ajouter Un Medicament</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div>
                <label>Nom Medicament:</label>
                <input type="text" onChange={this.handleChange} name="NomMedicament" />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleShow}>
              Close
            </Button>
            <Button onClick={this.add} variant="primary" >
              Add Medicament
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default connect(null,{addmedicaments})(AddModal);