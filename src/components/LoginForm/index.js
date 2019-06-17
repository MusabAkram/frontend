import React, { Component } from 'react';

class LoginForm extends Component {
  onChange = field => e => this.props.onChange(field, e.target.value.trim());

  render() {
    const { email, password, onSubmit, error } = this.props;

    return (
      <form className="text-left" onSubmit={onSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="enter your email"
          value={email}
          onChange={this.onChange('email')}
          autoFocus
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Please Input Your Password"
          value={password}
          onChange={this.onChange('password')}
        />

        <h6 style={{ padding: 10, color: 'red', fontSize: '12px', textAlign: 'center' }}>
          {error}
        </h6>

        <input type="submit" value="Log In" className="crypt-button-red-full" />
      </form>
    );
  }
}

export default LoginForm;
