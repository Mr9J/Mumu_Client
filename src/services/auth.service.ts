import { SignInModel, SignUpModel } from "@/types";
import axios from "axios";
import tokenService from "./token.service";

const URL = import.meta.env.VITE_API_URL;

class AuthService {
  signUp(x: SignUpModel) {
    return axios.post(`${URL}/Member/sign-up`, x);
  }

  signIn(x: SignInModel) {
    return axios.post(`${URL}/Member/sign-in`, x);
  }

  logOut() {
    localStorage.removeItem("currentUser");
  }

  currentUser() {
    const token = tokenService.getToken();
    if (token) {
      return axios.get(`${URL}/Member/current-user`, {
        headers: {
          Authorization: token,
        },
      });
    }
  }

  isAuth() {
    const token = tokenService.getToken();
    if (token) {
      return axios
        .get(`${URL}/MyGo`, {
          headers: {
            Authorization: token,
          },
        })
        .catch((e) => {
          if (e?.response?.status === 401) {
            console.log(e);
          }
        });
    }
    return Promise.resolve(false);
  }
}

export default new AuthService();
