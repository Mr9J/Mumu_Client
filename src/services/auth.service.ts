import { SignInModel, SignUpModel } from "@/types";
import axios from "axios";

const URL = import.meta.env.VITE_API_URL;

class AuthService {
  signUp(x: SignUpModel) {
    return axios.post(`${URL}/Member/sign-up`, x);
  }

  signIn(x: SignInModel) {
    return axios.post(`${URL}/Member/sign-in`, x);
  }
}

export default new AuthService();
