import React, { useState, useEffect } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import LoadingCard from "./LoadingCard";
import NotFoundCard from "./NotFoundCard";
import { IUser } from "./types";
import UserCard from "./UserCard";

interface ISearchResultProps extends RouteComponentProps {
  username: string;
}

const initialState: IUser = {
  login: "",
  name: "",
  location: "",
  avatar_url: "",
  html_url: "",
  followers: 0,
  following: 0,
  blog: "",
};

const SearchResult: React.FC<ISearchResultProps> = ({ username }) => {
  const [error, setError] = useState(false);
  const [user, setUser] = useState<IUser>(initialState);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (username.trim().length) {
      fetch(`https://api.github.com/users/${username}`, {
        method: "GET",
        headers: {
          Authorization: `Token ${process.env.REACT_APP_LAB10_KEY}`,
        },
      })
        .then((res) => {
          if (res.status === 404) {
            setError(true);
            return initialState;
          }
          return res.json();
        })
        .then((data) => {
          setUser(data);
          setIsLoading(false);
        });
    }
  }, [username]);

  if (isLoading) {
    return <LoadingCard />;
  }
  if (error) {
    return <NotFoundCard />;
  }
  return <UserCard info={user} />;
};

export default withRouter<ISearchResultProps, React.FC<ISearchResultProps>>(
  SearchResult
);
