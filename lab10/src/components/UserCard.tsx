import React from "react";
import followers from "../icons/followers.svg";
import location from "../icons/location.svg";
import link from "../icons/link.svg";
import BackButton from "./BackButton";
import { IUser } from "./types";

interface IUserCardProps {
  info: IUser;
}

const UserCard: React.FC<IUserCardProps> = ({ info }) => (
  <div className="user-card">
    <img src={info.avatar_url} alt={info.login} className="avatar" />
    <h1 className="login">{info.login}</h1>
    <h2 className="name">{info.name}</h2>
    <div className="followers">
      <img src={followers} alt="followers" className="icon" />
      {info.followers} followers &#9825; {info.following} following
    </div>
    {info.location ? (
      <div className="location">
        <img alt="location" src={location} className="icon" />
        {info.location}
      </div>
    ) : (
      <></>
    )}
    {info.blog ? (
      <div>
        <img alt="link" src={link} className="icon" />
        <a href={info.blog} rel="noreferrer" target="_blank">
          {info.blog}
        </a>
      </div>
    ) : (
      <></>
    )}
    <a href={info.html_url} rel="noreferrer" target="_blank">
      Открыть страницу пользователя на GitHub
    </a>
    <BackButton />
  </div>
);

export default UserCard;
