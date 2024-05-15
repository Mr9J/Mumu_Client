class TokenService {
  getToken() {
    const userString = localStorage.getItem("currentUser");
    if (userString) {
      const userObj = JSON.parse(userString);
      const token = userObj.token;
      return token;
    }
    return null;
  }
}

export default new TokenService();
