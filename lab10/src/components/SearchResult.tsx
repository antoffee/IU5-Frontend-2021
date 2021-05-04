import React, { useEffect } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import LoadingCard from "./LoadingCard";
import NotFoundCard from "./NotFoundCard";
import UserCard from "./UserCard";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { getUserInfo } from "../Redux/UserSlice";
import { FetchStatuses } from "../Redux/types";

interface ISearchResultProps extends RouteComponentProps {
  username: string;
}

const SearchResult: React.FC<ISearchResultProps> = ({ username }) => {
  const { error, status } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (username.trim().length) {
      dispatch(getUserInfo(username));
    }
  }, [dispatch, username]);

  if (status === FetchStatuses.idle) {
    return <LoadingCard />;
  }
  if (error) {
    return <NotFoundCard />;
  }
  return <UserCard />;
};

export default withRouter<ISearchResultProps, React.FC<ISearchResultProps>>(
  SearchResult
);
