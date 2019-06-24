import React, { Component } from 'react';

class SignUpForm extends Component {
  onChange = field => e => this.props.onChange(field, e.target.value.trim());

  render() {
    const { email, password, onSubmit, error ,comfrimpassword} = this.props;

    return (
        <form className="text-left" onSubmit={onSubmit}>
        <label for="email">Email</label>
        <input
        required
          type="text"
          id="email"
          name="email"
          placeholder="Your email/cellphone"
          value={email}
          onChange={this.onChange('email')}
          autoFocus
        />

        <label htmlFor="password">Password</label>
        <input
        required
          type="password"
          id="password"
          name="password"
          placeholder="6-20 letters and numbers"
          value={password}
          onChange={this.onChange('password')}
        />
        <label for="confirm-password">Confirm Password</label>
        <input
        required
         type="password" 
         id="confirm-password" 
         name="comfrimpassword"
          placeholder="6-20 letters and numbers"
          value={comfrimpassword}
          onChange={this.onChange('comfrimpassword')}
         />

        <h6 style={{ padding: 10, color: 'red', fontSize: '12px', textAlign: 'center' }}>
          {error}
        </h6>
        <div className="my-1">
          <div className="custom-control custom-checkbox mr-sm-2">
            <input type="checkbox" className="custom-control-input" id="terms-agree" required/>
            <label className="custom-control-label" for="terms-agree">I agree to the terms of services</label>
          </div>
        </div>
        <input type="submit" value="SignUp" className="crypt-button-red-full"/>
    </form>
    );
  }
}

export default SignUpForm;
