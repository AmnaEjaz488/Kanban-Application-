import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    const token = this.getToken();
    return token ? jwtDecode<JwtPayload>(token) : null; // Decode and return the token payload
  }

  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token); // Check if token exists and is not expired
  }
  
  isTokenExpired(token: string) {
    try {
      const decoded = jwtDecode<JwtPayload>(token);
      if (!decoded.exp) return false; // If no expiration, assume valid
      const currentTime = Date.now() / 1000; // Current time in seconds
      return decoded.exp < currentTime; // Check if token is expired
    } catch (error) {
      console.error('Error decoding token:', error);
      return true; // Treat invalid tokens as expired
    }
  }

  getToken(): string {
    return localStorage.getItem('id_token') || ''; // Retrieve the token from localStorage
  }

  login(idToken: string) {
    localStorage.setItem('id_token', idToken); // Save the token to localStorage
    window.location.assign('/'); // Redirect to the home page
  }

  logout() {
    localStorage.removeItem('id_token'); // Remove the token from localStorage
    window.location.assign('/login'); // Redirect to the login page
  }
}

export default new AuthService();