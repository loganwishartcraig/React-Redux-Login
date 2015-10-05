import React, { Component, propTypes } from 'react';
import { connect } from 'react-redux';

import { updateUsername, updatePassword, clearLoginInfo } from '../Actions/loginActions'

import UsernameField from '../Components/UsernameField';
import PasswordField from '../Components/PasswordField';

class LoginContainer extends Component {

  render() {

    const { dispatch, usernameText, passwordText } = this.props;

    return(
      <div className="login--container">
        <h1 className="login--header">Welcome</h1>
        <form className="login--form" action="/api/authenticate" method="POST">
          <label className="login--label">Username</label>
          <UsernameField handleChange={text => {dispatch(updateUsername(text))}}/>
          <label className="login--label">Password</label>
          <PasswordField handleChange={text => {dispatch(updatePassword(text))}} />
          <button className="login--btn--submit" type="submit" onClick={evt => {evt.preventDefault(); $.ajax(
              '/api/authenticate',
              {
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({
                  username: this.props.usernameText,
                  password: this.props.passwordText
                }),
                dataType: 'json'
              }).done(function(res) {
                if (res.success === true) {
                  window.sessionStorage.token = res.token;
                  location.reload();
                } else {
                  $('input[class^="login--input"]').css('border-color', 'red')
                }
              })
            }}>login</button>
          <a className="login--btn--signup" href="/signup">Sign Up</a>
        </form>
        <span className="login--text--error" className={'error-text'} style={{color: 'red'}}></span>
      </div>
    );
  }

}

function select(state) {
  return {
    usernameText: state.usernameField,
    passwordText: state.passwordField
  }
}
export const LoginModule = connect(select)(LoginContainer)