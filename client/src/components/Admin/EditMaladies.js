import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { updatemaladies } from '../../actions/ListMaladiesActions';
import { connect } from "react-redux"



class EditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

componentDidMount(){
  this.setState(
    this.props.allmaladies.maladies.filter(el => el._id == this.props.id)[0]
  )
}
  handleShow = () => {
    this.setState({ show: !this.state.show });
  };
  handleChange = e => {
    this.setState({ NomMaladie: e.target.value });
  };
  edit = () => {
    this.props.updatemaladies(this.state._id, {NomMaladie: this.state.NomMaladie, _id: this.state._id});
    this.setState({ show: false });
  }

  render() {
    return (
      <div >
        <button variant="primary" onClick={this.handleShow}>
        <i className="fa fa-edit"></i>
        </button>

        <Modal show={this.state.show} onHide={this.handleShow} className="Modal_Add_Medicament">
          <Modal.Header closeButton>
            <Modal.Title>Editer Une Maladie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div>
                <label>Nom Maladie:</label>
                <input type="text" name="name" onChange={this.handleChange} name="NomMedicament" value={this.state.NomMaladie}/>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleShow}>
              Close
            </Button>
            <Button onClick={this.edit} variant="primary" >
              Edit Maladie
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    allmaladies: state.maladie  };
}


export default connect(mapStateToProps, { updatemaladies })(EditModal);