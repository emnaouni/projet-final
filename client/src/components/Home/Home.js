import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nabar from "../NavBar/Navbar"
import './home.css'
import doc from '../../images/doctor.png'
import chrono from '../../images/chrono.png'
import CommentMarche from '../Commentmarche/CommetçaMarche'
import SearchDoctor from '../chercherMedecin/SearchDoctors'
import Footer from '../footer/Footer'
import {connect} from 'react-redux'
import {loadUser} from '../../actions/authActions'
import HomePaient from './HomePatient'
import HomeMedecin from './medecin/HomeMedecin'
class Home extends React.Component{
    componentWillMount() {
        this.props.loadUser()
    }
    
    render(){
       
        
        return (
       <div className="Home">
  
       {this.props.auth.user==null ||this.props.auth.user.Role==="patient"||this.props.auth.user.msg === "no token , access denied"? <HomePaient/>: <HomeMedecin/> }
    
       <Footer/>
    </div>
    );

}
   
}
const mapStateToProps = state => {
    return {
      auth: state.auth
    }
  }
export default connect(mapStateToProps,{loadUser})(Home);