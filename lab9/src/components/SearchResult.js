import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import LoadingCard from "./LoadingCard";
import NotFoundCard from "./NotFoundCard";
import UserCard from "./UserCard";

const SearchResult = ({ username }) => {
  const [error, setError] = useState(false);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (username.trim().length) {
      fetch(`https://api.github.com/users/${username}`, {
        method: "GET",
        headers: {
          Authorization: `Token ${process.env.REACT_APP_KEY}`,
        },
      })
        .then((res) => {
          if (res.status === 404) {
            setError(true);
            return {};
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

SearchResult.propTypes = {
  username: PropTypes.string.isRequired,
};

export default withRouter(SearchResult);
