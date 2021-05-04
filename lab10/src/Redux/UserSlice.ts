/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IUser, FetchStatuses, IUserSlice, IErrorMessage } from "./types";

const initialState: IUserSlice = {
  user: {
    login: "",
    name: "",
    location: "",
    avatar_url: "",
    html_url: "",
    followers: 0,
    following: 0,
    blog: "",
  },
  status: FetchStatuses.idle,
  error: undefined,
};

export const getUserInfo = createAsyncThunk<
  IUser,
  string,
  {
    rejectValue: IErrorMessage;
  }
>("USER/GET_USER_INFO", (username: string, thunkAPI) =>
  fetch(`https://api.github.com/users/${username}`, {
    method: "GET",
    headers: {
      Authorization: `Token ${process.env.REACT_APP_LAB10_KEY}`,
    },
  })
    .then((res) => res.json())
    .then((data) =>
      "message" in data
        ? thunkAPI.rejectWithValue(data as IErrorMessage)
        : (data as IUser)
    )
);

const UserSlice = createSlice({
  name: "UserSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserInfo.pending, (state) => {
      state.status = FetchStatuses.idle;
      state.error = undefined;
    });
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      state.status = FetchStatuses.succeeded;
      state.user = action.payload;
    });
    builder.addCase(getUserInfo.rejected, (state) => {
      state.status = FetchStatuses.failed;
      state.error = "NOT FOUND";
    });
  },
});

export default UserSlice.reducer;
