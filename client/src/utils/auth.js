import decode from 'jwt-decode';

class AuthService {
  // retrieve data saved in token
  getProfile() {
    return decode(this.getToken());
  }

  // checks if the user is still logged in
  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken();
    // Checks if token is undefined and if the token is expired
    return !!token && !this.isTokenExpired(token);
  }

  // checks if the token has expired
  isTokenExpired(token) {
    try {
      // const token = localStorage.getItem('id_token');
      const decoded = decode(token);
      const currentTime = new Date().getTime() / 1000;
      // if (decoded.exp < Date.now() / 1000) {
      if (decoded.exp < currentTime) {
        console.log('token expired')
        localStorage.removeItem('id_token');
        return true;
      }
      else return false;
    } catch (err) {
      return false;
    }
  }

  // retrieve token from localStorage
  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token');

  }

  // set token to localStorage and reload page to homepage
  login(idToken) {
    // Saves user token to localStorage
    localStorage.setItem('id_token', idToken);

    window.location.assign('/profile');
  }

  // clear token from localStorage and force logout with reload
  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token');
    // this will reload the page and reset the state of the application
    window.location.assign('/');
  }
}

export default new AuthService();

