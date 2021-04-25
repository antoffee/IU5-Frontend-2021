import React from "react";
import PropTypes from "prop-types";
import followers from "../icons/followers.svg";
import location from "../icons/location.svg";
import link from "../icons/link.svg";
import BackButton from "./BackButton";

const UserCard = ({ info }) => (
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

UserCard.propTypes = {
  info: PropTypes.shape({
    login: PropTypes.string,
    name: PropTypes.string,
    location: PropTypes.string,
    avatar_url: PropTypes.string,
    html_url: PropTypes.string,
    followers: PropTypes.number,
    following: PropTypes.number,
    blog: PropTypes.string,
  }).isRequired,
};

export default UserCard;
