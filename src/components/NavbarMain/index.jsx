import React, { useContext, useEffect, useRef } from "react";
import { BsBook } from "react-icons/bs";
import { BiBookBookmark } from "react-icons/bi";
import { BsReverseLayoutTextWindowReverse } from "react-icons/bs";
import { BsBox } from "react-icons/bs";
import { BsStar } from "react-icons/bs";

import "./index.scss";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../Context";

const index = () => {
  const elementRef = useRef();
  const user_info = useRef();
  useEffect(() => {
    const main = elementRef.current;
    const div = user_info.current;
    console.log(main);
    window.addEventListener("scroll", function () {
      main.classList.toggle("sticky", window.scrollY > 10);
      div.classList.toggle("none", window.scrollY > 400);
    });
  }, []);
  const { user } = useContext(UserContext);
  return (
    <>
      <div className="main-wrapper" ref={elementRef}>
        <div className="user__info" ref={user_info}>
          <img src={user.avatar_url} alt="" className="user__nav-img" />
          <p className="user__nav-name">{user.login}</p>
        </div>
        <ul className="main-navbar w-50 ">
          <NavLink to="/">
            <li className="main-navbar-item  d-flex gap-2">
              <span>
                <BsBook className="main-icon" />
              </span>
              <p>Overview</p>
            </li>
          </NavLink>
          <NavLink to={`/repostory/${user.login}`}>
            <li className="main-navbar-item  d-flex gap-2">
              <span>
                <BiBookBookmark className="main-icon" />
              </span>
              <p>Repositories</p>
            </li>
          </NavLink>

          <NavLink to="/project">
            <li className="main-navbar-item  d-flex gap-2">
              <span>
                <BsReverseLayoutTextWindowReverse className="main-icon" />
              </span>
              <p>Projects</p>
            </li>
          </NavLink>

          <NavLink to="/packegs">
            <li className="main-navbar-item  d-flex gap-2">
              <span>
                <BsBox className="main-icon" />
              </span>
              <p>Packages</p>
            </li>
          </NavLink>

          <NavLink to="/star">
            <li className="main-navbar-item  d-flex gap-2">
              <span>
                <BsStar className="main-icon" />
              </span>
              <p>Star</p>
            </li>
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default index;
