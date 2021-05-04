export interface IUser {
  login: string;
  name: string;
  location: string;
  avatar_url: string;
  html_url: string;
  followers: number;
  following: number;
  blog: string;
}

export enum FetchStatuses {
  idle = "idle",
  succeeded = "succeeded",
  loading = "loading",
  failed = "failed",
}

export interface IUserSlice {
  user: IUser;
  status: FetchStatuses;
  error: string | undefined;
}

export interface IErrorMessage {
  message: string;
}
