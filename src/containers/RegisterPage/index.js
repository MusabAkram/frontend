import React, { Component } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import Registry from '../../components/RegisterForm';
import actions from '../../actions';
import NavBar from '../../components/NavBar';

class RegistryPage extends Component {
  state = { email: '', password: '',comfrimpassword:'',newError:'' };

  onSubmit = e => {
    e.preventDefault();
    if(this.state.password === this.state.comfrimpassword){
    this.setState({newError:''})

    this.props.actions.fetchSignUp(this.state.email, this.state.password)
  }else{
    this.setState({newError:'Password didnt match'})
  }
  };

  handleChangeField = (field, value) => this.setState({ [field]: value });

  render() {
    const { email, password,comfrimpassword,newError} = this.state;
    const { error = newError } = this.props;

    return (
      <main>
        <NavBar />

        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="cryptorio-forms text-center pt-5 pb-5">
                <div className="cryptorio-main-form">
                  <Registry
                    email={email}
                    password={password}
                    comfrimpassword={comfrimpassword}
                    onChange={this.handleChangeField}
                    onSubmit={this.onSubmit}
                    error={newError}
                  />

                  <p className="float-left"><a href="/login">Sign In</a></p>
                  <p className="float-right"><a href="/forgot">Forgot Password</a></p>
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
  }), actions))(RegistryPage);
