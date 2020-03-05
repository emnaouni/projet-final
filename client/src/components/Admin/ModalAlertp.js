import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import { connect } from 'react-redux';
import { deletepatients } from "../../actions/patientActions"

 
class ModalAlertp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }
 
    openModal() {
        this.setState({
            visible : true
        });
    }
 
    closeModal() {
        this.setState({
            visible : false
        });
    }
 
    render() {
        return (
            <section>
                <button> <i className="fa fa-trash" onClick={() => this.openModal()}></i></button>
                <Modal visible={this.state.visible} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div>
                        <h1>Attention!</h1>
                        <h6>Le patient sélectioné sera supprimer définitivement!</h6>
                        <button class="form-btn sx back" href="javascript:void(0);" onClick={() => this.closeModal()}>Close</button>
                        <button class="form-btn dx" href="javascript:void(0);" onClick={() => {
                            this.props.deletepatients(this.props.id)
                            this.closeModal()
                        }}>Confirmer</button>
                    </div>
                </Modal>
            </section>
        );
    }
}

export default connect(null, { deletepatients })(ModalAlertp)