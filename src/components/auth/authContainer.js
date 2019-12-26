import React from 'react'
import {Auth} from './authComponent'
import { connect } from 'react-redux';
import {setEmailText, setPasswordText} from "../../store/auth/action"


class AuthContainer extends React.Component{
    render(){
        return (<Auth setEmail={this.props.setEmailText} 
            setPassword={this.props.setPasswordText} email={this.props.email} password={this.props.password}></Auth>)
    }
}

const mapStateProps = (store) => {
    return {
        email: store.auth.email,
        password: store.auth.password
    };
}

const mapDispatchToProps = {
    setEmailText,
    setPasswordText
}

export default connect(mapStateProps, mapDispatchToProps)(AuthContainer)