export type SignUpModel = {
  nickname: string;
  username: string;
  email: string;
  password: string;
};

export type SignInModel = {
  username: string;
  password: string;
};

export type CurrentUser = {
  id: number;
  nickname: string;
  username: string;
  email: string;
  role: string;
};
