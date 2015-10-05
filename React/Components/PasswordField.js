import React, { Component, findDOMNode, propTypes } from 'react';

export default class PasswordFeild extends Component {

  handleChange(evt) {
    evt.preventDefault()
    var password = findDOMNode(this.refs.password).value.trim()
    this.props.handleChange(password)
  }

  render() {
    return(
      <input className="login--input--password" type="password" ref='password' value={this.props.password} name='password' onChange={evt => {this.handleChange(evt)}} />
    );
  }

}