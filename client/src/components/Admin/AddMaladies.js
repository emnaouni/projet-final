import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { addmaladies } from '../../actions/ListMaladiesActions';
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
    this.props.addmaladies(this.state);
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
            <Modal.Title>Ajouter Une Maladie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div>
                <label>Nom Maladie:</label>
                <input type="text" onChange={this.handleChange} name="NomMaladie" />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleShow}>
              Close
            </Button>
            <Button onClick={this.add} variant="primary" >
              Add Maladie
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default connect(null,{addmaladies})(AddModal);