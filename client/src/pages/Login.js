import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import SignUpContainer from '../components/loginComponents/containers/SignUpContainer';
import LoginContainer from '../components/loginComponents/containers/LoginContainer';
import Auth from '../util/Auth';
import './App.css';
import API from '../util/API'



class Login extends Component {

    constructor(props, context) {

        super(props, context);

        this.handleShowLogin = this.handleShowLogin.bind(this);
        this.handleCloseLogin = this.handleCloseLogin.bind(this);
        this.handleShowSignUp = this.handleShowSignUp.bind(this);
        this.handleCloseSignUp = this.handleCloseSignUp.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.toggleAuthenticateStatus = this.toggleAuthenticateStatus.bind(this);

        this.state = {
            loginShow: false,
            signUpShow: false,
            authenticated: false
        }
    }

    componentDidMount() {
        // check if user is logged in on refresh
        this.toggleAuthenticateStatus();
    }

    handleShowLogin() {
        this.setState({ loginShow: true })
    }

    handleCloseLogin() {
        this.setState({ loginShow: false })
    }

    handleShowSignUp() {
        this.setState({ signUpShow: true })
    }

    handleCloseSignUp() {
        this.setState({ signUpShow: false });
    }

    handleGet() {
        API.getExample();
    }

    handleLogout() {
        this.setState({ authenticated: false });
        Auth.deauthenticateUser();
        this.props.handleLogout();
    }

    toggleAuthenticateStatus() {
        // check authenticated status and toggle state based on that
        this.setState({ authenticated: Auth.isUserAuthenticated() })
    }

    render() {
        const { authenticated } = this.state;

        let welcomeMsg = null,
            buttons = null;
        if (authenticated) {
            welcomeMsg = <span id="welcome-text">{"Welcome " + this.props.userName}</span>
            buttons =
                <Button
                    onClick={this.handleLogout}
                    className={"logoutBtn btn btn-warning " + (authenticated ? "visible" : "invisible")}>
                    Logout
                </Button>
        }
        else {
            welcomeMsg = <span id="welcome-text">Welcome Guest</span>
            buttons = <>
                <Button
                    id="button1"
                    onClick={this.handleShowLogin}
                    className={"loginBtn btn btn-warning " + (authenticated ? "invisible" : "visible")}>
                    Login
                </Button>
                <Button
                    onClick={this.handleShowSignUp}
                    className={"signUpBtn btn btn-warning " + (authenticated ? "invisible" : "visible")}>
                    Register
                </Button> </>
        }



        return (
            <div className="loginDiv">
                {welcomeMsg}
                {buttons}
                <SignUpContainer
                    show={this.state.signUpShow}
                    hide={this.handleCloseSignUp}
                    reload={this.props.reload}
                />
                <LoginContainer
                    show={this.state.loginShow}
                    hide={this.handleCloseLogin}
                    reload={this.props.reload}
                    toggleAuthenticateStatus={this.toggleAuthenticateStatus}
                    retrieveList={this.props.retrieveList}
                />
            </div>

        );

    }
}

export default Login;
