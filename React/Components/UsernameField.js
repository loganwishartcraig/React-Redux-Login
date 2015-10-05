import React, { Component, findDOMNode, propTypes } from 'react';

export default class UsernameFeild extends Component {

  handleChange(evt) {
    evt.preventDefault()
    var username = findDOMNode(this.refs.username).value.trim()
    this.props.handleChange(username)
  }

  render() {
    return(
      <input className="login--input" type="text" ref='username' value={this.props.username} name='username' onChange={evt => {this.handleChange(evt)}} />
    );
  }

}