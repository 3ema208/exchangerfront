import React from 'react'
import SingIn from "./singIn"
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { setEmailText, setPasswordText, login } from "../../store/auth/action"


class AuthContainer extends React.Component {
    render() {
        return (
            <div>
                {this.props.isAuth ? <Redirect to="/" /> :
                    <SingIn
                        setEmail={this.props.setEmailText}
                        setPassword={this.props.setPasswordText}
                        email={this.props.email}
                        password={this.props.password}
                        login={this.props.login}
                        failLogin={this.props.failLogin}>
                    </SingIn>}

            </div>
        )
    }
}

const mapStateProps = (store) => {
    return {
        email: store.auth.email,
        password: store.auth.password,
        isAuth: store.auth.token !== null,
        failLogin: store.auth.error
    };
}

const mapDispatchToProps = dispatch => {
    return {
        setEmailText: (e) => dispatch(setEmailText(e)),
        setPasswordText: (p) => dispatch(setPasswordText(p)),
        login: (username, password) => dispatch(login(username, password)),
    }
}

export default connect(mapStateProps, mapDispatchToProps)(AuthContainer)