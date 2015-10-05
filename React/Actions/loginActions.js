export const UPDATE_USERNAME = 'UPDATE_USERNAME';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';

export const updateUsername = function(text) {
  return {
    type: UPDATE_USERNAME,
    text
  }
}

export const updatePassword = function(text) {
  return {
    type: UPDATE_PASSWORD,
    text
  }
}

