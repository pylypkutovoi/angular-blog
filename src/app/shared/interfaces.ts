export interface IUser {
  email: string;
  password: string;
  returnSecureToken?: boolean;
}

export interface IFireBaseAuthResponse {
  idToken: string;
  expiresIn: string;
}

export interface Post {
  id?: string;
  title: string;
  text: string;
  author: string;
  date: Date;
}
