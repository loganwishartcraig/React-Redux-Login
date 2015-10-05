import { combineReducers } from 'redux';
import { UPDATE_USERNAME, UPDATE_PASSWORD } from '../Actions/loginActions'

function usernameField(state = '', action) {
  switch (action.type) {
    case UPDATE_USERNAME:
      return action.text;
    default:
      return state;
  }
}

function passwordField(state = '', action) {
  switch (action.type) {
    case UPDATE_PASSWORD:
      return action.text;
    default:
      return state;
  }
}

const loginModule = combineReducers({
  usernameField,
  passwordField
})

export default loginModule;