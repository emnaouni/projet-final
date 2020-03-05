import React from 'react'
import {connect} from 'react-redux'
import {Route , Redirect} from 'react-router-dom'

const PrivateRouteMedecin = ({component : Component, auth , ...rest}) => {
    return (
        <Route {...rest} render = {props => !auth.isAuthenticated ? (
            <Redirect to="/Login/medecin" />
            ) : (
                <Component { ...props }/>

            )} />
    
    )}

        const mapStateToProps = state => {
            return {
                auth : state.auth
            }
        }
        export default connect(mapStateToProps)(PrivateRouteMedecin)