import frLocale from "date-fns/locale/fr";
import DateFnsUtils from "@date-io/date-fns";
import React, { useState, useCallback, Component } from "react";
import { IconButton } from "@material-ui/core";
import { MuiPickersUtilsProvider, DateTimePicker } from "@material-ui/pickers";
import { Modal, Button } from "react-bootstrap";
import {setAlert,removeAlert} from '../../actions/AlertActions'
import Alert from 'react-bootstrap/Alert'
import {UpdateRdv,getRDV,getmedecins} from '../../actions/medicinActions'
import {loadUser} from '../../actions/authActions'


import '../medecin/medecin.css'
import uuid from 'uuid'
import {connect} from 'react-redux'



class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      selectedDate: new Date(),
      show: false,
      id_medecin:this.props.medecins.medecins.filter(medecin=>medecin._id===this.props.id)[0],
      format:{
        daterdv:"zadazd",
        id_patient:""
      },
      List:false
    }
    console.log(this.state.id_medecin)
  }
  componentDidMount() {
    this.props.loadUser()
    this.props.getRDV(this.state.id_medecin)
    console.log(this.props.Onemedecin)
    this.props.getmedecins()
}
componentWillReceiveProps(nextProps){
  this.setState({rdvs: nextProps.medecins.medecins.filter(el => el._id === this.props.id)[0].Rdv});
}
AddRDV =()=>{
  let x = this.state.rdvs.filter(el => el.daterdv.includes(this.state.format.daterdv))
  if(x.length === 0 ){
    this.props.UpdateRdv(this.state.id_medecin._id,this.state.format) 
    this.handleShow()
  }else{
    this.setState({display: true}, () => setTimeout(() => {
      this.setState({display: false})
    }, 3000))
  }
  // this.state.List ? alert("rdv déja éxistant") : this.props.UpdateRdv(this.state.id_medecin._id,this.state.format) 
  // (this.state.format.daterdv.length>0 || this.state.format.id_patient.length>0 )&&
}
  ShowAlert=()=>{
    let id = uuid()
   
    if(this.props.auth.user==null){
      this.props.setAlert('Connectez avant de prendre un RDV', 'dark', id)
    setTimeout(() => {
      this.props.removeAlert(id)
    }, 5000);
  }
    else{
      this.handleShow();
      
    }
    
    
  }
  handleShow = () => {
    this.setState({ show: !this.state.show ,format:{daterdv:"", id_patient:"" }});
  };
  handleMenuOpen = e => {
    e.stopPropagation()
    this.setState({ anchorEl: e.currentTarget })
  }

  handleDateChange = date => {
    this.props.getmedecins()
    this.setState({ 
          selectedDate: date, 
          format:{
            daterdv: String(date.getDate()).padStart(2, '0') + "-" + String(date.getMonth() + 1).padStart(2, '0') + "-" + date.getFullYear() + " " + String(date.getHours()).padStart(2, '0') + ":" + String(date.getMinutes()).padStart(2, '0'), 
            id_patient:this.props.auth.user._id}} , ()=>{
              console.log(this.state.format.daterdv)
              console.log(this.state.id_medecin.Rdv)
              var b=this.state.id_medecin.Rdv.filter(rdv=>rdv.daterdv===this.state.format.daterdv)
              if(b.length === 0 ){b=false ; console.log(b)}
              console.log(b)
              b&&this.setState({List:true});
              console.log(this.state.format.daterdv)
            }
        );
      
        
      }
        render() {
          
    return (
      <div>
      <Button id="buttonRDV" variant="primary" onClick={this.ShowAlert}>Prendre Rendez-vous</Button>

         <Modal show={this.state.show} onHide={this.handleShow}>
         <Modal.Header closeButton>
            <Modal.Title>Choisir la date et le temps</Modal.Title>
          </Modal.Header>
          <Modal.Body>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={frLocale}>
        
        <DateTimePicker
          disablePast
          ampm={false}
          value={this.state.selectedDate}
          onChange={this.handleDateChange}
          InputProps={{
            endAdornment: (
              <IconButton
                aria-label="Select locale"
                onClick={this.handleMenuOpen}
                aria-owns={this.state.anchorEl ? "locale-menu" : undefined}
              >
              </IconButton>
            ),
          }} />
      </MuiPickersUtilsProvider>
      </Modal.Body>
      <Modal.Footer>
        {
          this.state.display && (
            <div className="d-flex justify-content-center w-100">
              <Alert variant="danger">
                  Séléctionnez un autre rendez-vous SVP!
                </Alert>
            </div>
            )
        }
            <Button id="buttonRDV" onClick={this.AddRDV}>
             {console.log(this.state.format.id_patient,this.state.format.daterdv)}
            Confirmer mon RDV
            </Button>
          </Modal.Footer>
        </Modal>






      </div>
    )
  }

}
const mapStateToProps = state => {
  return{
      auth: state.auth,
      Onemedecin:state.medecin,
      medecins:state.medecin
  }
}

export default connect(mapStateToProps ,{setAlert,removeAlert,UpdateRdv,loadUser,getRDV ,getmedecins})(AddModal);