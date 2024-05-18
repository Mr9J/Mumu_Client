import { SignInModel, SignUpModel } from "@/types";
import axios from "axios";
import { GetToken } from "./token.service";

const URL = import.meta.env.VITE_API_URL;

export async function SignUp(x: SignUpModel) {
  return await axios.post(`${URL}/Member/sign-up`, x);
}

export async function SignIn(x: SignInModel) {
  return await axios.post(`${URL}/Member/sign-in`, x);
}

export function LogOut() {
  if (localStorage.getItem("currentUser")) {
    localStorage.removeItem("currentUser");
  }
}

export async function IsLogIn() {
  await axios.get(`${URL}/MyGo`, {
    headers: { Authorization: GetToken() },
  });
}
