import React from 'react'
import SingIn from "./singIn"
import { connect } from 'react-redux';
import {setEmailText, setPasswordText, tryLogin} from "../../store/auth/action"


class AuthContainer extends React.Component{
    render(){
        return (<SingIn 
                    setEmail={this.props.setEmailText}
                    setPassword={this.props.setPasswordText}
                    tryLogin={this.props.tryLogin}
                    email={this.props.email}
                    password={this.props.password}>
                    </SingIn>)
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
    setPasswordText,
    tryLogin
}

export default connect(mapStateProps, mapDispatchToProps)(AuthContainer)