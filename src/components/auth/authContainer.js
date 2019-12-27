import React from 'react'
import SingIn from "./singIn"
import { connect } from 'react-redux';

import {setEmailText, setPasswordText, login} from "../../store/auth/action"


class AuthContainer extends React.Component{
    render(){
        return (<SingIn 
                    setEmail={this.props.setEmailText}
                    setPassword={this.props.setPasswordText}
                    email={this.props.email}
                    password={this.props.password}
                    login={this.props.login}>
                    </SingIn>)
    }
}

const mapStateProps = (store) => {
    return {
        email: store.auth.email,
        password: store.auth.password,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        setEmailText: (e)=> dispatch(setEmailText(e)),
        setPasswordText: (p)=> dispatch(setPasswordText(p)),
        login: (username, password) => dispatch(login(username, password)),
    }
}

export default connect(mapStateProps, mapDispatchToProps)(AuthContainer)