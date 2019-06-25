import React, { Component } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import LoginForm from '../../components/LoginForm';
import actions from '../../actions';
import NavBar from '../../components/NavBar';

class LoginPage extends Component {
  state = { email: '', password: '' };

  onSubmit = e => {
    e.preventDefault();
    this.props.actions.fetchLogin(this.state.email, this.state.password);
  };

  handleChangeField = (field, value) => this.setState({ [field]: value });

  render() {
    const { error } = this.props;
    const { email, password } = this.state;

    return (
      <main>
        <NavBar />

        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="cryptorio-forms text-center pt-5 pb-5">
                <div className="cryptorio-main-form">
                  <LoginForm
                    email={email}
                    password={password}
                    onChange={this.handleChangeField}
                    onSubmit={this.onSubmit}
                    error={error}
                  />

                  <p className="float-left"><a href="register.html">Sign Up</a></p>
                  <p className="float-right"><a href="forgot.html">Forgot Password</a></p>
                </div>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </main>
    );
  }
}

export default compose(
  connect(state => ({
    error: state.auth.errorLogin
  }), actions))(LoginPage);
