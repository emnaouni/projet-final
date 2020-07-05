import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { updatemedicaments } from '../../actions/ListMedicamentActions';
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
    this.props.allmedicaments.medicaments.filter(el => el._id == this.props.id)[0]
  )
}
  handleShow = () => {
    this.setState({ show: !this.state.show });
  };
  handleChange = e => {
    this.setState({ NomMedicament: e.target.value });
  };
  edit = () => {
    this.props.updatemedicaments(this.state._id, {NomMedicament: this.state.NomMedicament, _id: this.state._id});
    this.setState({ show: false });
  }

  render() {
    return (
      <div >
        <button  onClick={this.handleShow}>
        <i className="fa fa-edit"></i>
        </button>

        <Modal show={this.state.show} onHide={this.handleShow} className="Modal_Add_Medicament">
          <Modal.Header closeButton>
            <Modal.Title>Editer Un Medicament</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div>
                <label>Nom Medicament:</label>
                <input type="text" name="name" onChange={this.handleChange} name="NomMedicament" value={this.state.NomMedicament}/>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button  onClick={this.handleShow}>
              Close
            </Button>
            <Button onClick={this.edit}  >
              Edit Medicament
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    allmedicaments: state.listMedicamentsReducer  };
}


export default connect(mapStateToProps, { updatemedicaments })(EditModal);