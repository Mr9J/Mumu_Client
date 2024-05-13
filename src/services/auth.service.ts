import { SignInModel, SignUpModel } from "@/types";
import axios from "axios";

const API_URL = import.meta.env.VITE_MUMU_SERVER;

class AuthService {
  signUp(x: SignUpModel) {
    return axios.post(`${API_URL}/api/Member/sign-up`, x);
  }

  signIn(x: SignInModel) {
    return axios.post(`${API_URL}/api/Member/sign-in`, x);
  }
}

export default new AuthService();
