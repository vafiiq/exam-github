import React, { useEffect } from "react";
import { MdOutlinePeople } from "react-icons/md";
import { MdOutlineAddLocation } from "react-icons/md";
import "./style.scss";
import { Link } from "react-router-dom";

const index = ({ data }) => {
  console.log(data);
  const {
    login,
    avatar_url,
    bio,
    company,
    followers,
    following,
    location,
    name,
    public_repos,
    twiter_username,
    url,
  } = data;
  return (
    <div className="sidebar-wrapper text-secondary">
      <ul className="sidebar-list">
        <li className="sidebar-item">
          <img src={avatar_url} alt="user-avatar" className="user-avatar" />
        </li>
        <li className="sidebar-item user-name">
          <h2>{login}</h2>
          <span>{name}</span>
          <p>Edit Profile</p>
        </li>
        <li className="sidebar-item d-flex gap-2 follow">
          <div className="follower d-flex align-items-center">
            <MdOutlinePeople />
            <Link to={`/follower/${login}`}>
              <p className="m-0 text-secondary">
                <span>{followers}</span> followers{" "}
              </p>
            </Link>
          </div>
          <div className="following">
            <Link to={`following/${login}`}>
            <p className="m-0 text-secondary">
              ·<span>{following}</span>following{""}
            </p>
            </Link>
          </div>
        </li>
        <li className="sidebar-item">
          {location ? <MdOutlineAddLocation /> : ""}
          {location ? location : ""}
        </li>
        <li className="sidebar-item">{company ? company : ""}</li>
        <li className="sidebar-item">
          {twiter_username ? "" : twiter_username}
        </li>
        <li className="sidebar-item">
        </li>
      </ul>
    </div>
  );
};

export default index;
