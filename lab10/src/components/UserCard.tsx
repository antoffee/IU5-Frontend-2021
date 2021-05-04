import React from "react";
import { useAppSelector } from "../Redux/hooks";
import followers from "../icons/followers.svg";
import location from "../icons/location.svg";
import link from "../icons/link.svg";
import BackButton from "./BackButton";

const UserCard: React.FC = () => {
  const { user } = useAppSelector((state) => state.user);
  return (
    <div className="user-card">
      <img src={user.avatar_url} alt={user.login} className="avatar" />
      <h1 className="login">{user.login}</h1>
      <h2 className="name">{user.name}</h2>
      <div className="followers">
        <img src={followers} alt="followers" className="icon" />
        {user.followers} followers &#9825; {user.following} following
      </div>
      {user.location ? (
        <div className="location">
          <img alt="location" src={location} className="icon" />
          {user.location}
        </div>
      ) : (
        <></>
      )}
      {user.blog ? (
        <div>
          <img alt="link" src={link} className="icon" />
          <a href={user.blog} rel="noreferrer" target="_blank">
            {user.blog}
          </a>
        </div>
      ) : (
        <></>
      )}
      <a href={user.html_url} rel="noreferrer" target="_blank">
        Открыть страницу пользователя на GitHub
      </a>
      <BackButton />
    </div>
  );
};

export default UserCard;
