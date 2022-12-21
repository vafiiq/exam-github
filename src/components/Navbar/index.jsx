import React, { useContext, useEffect, useRef, useState } from "react";
import "./style.scss";
import { FaGithub } from "react-icons/fa";
import { BsBell } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { api } from "../../API";
import { SearchUserListContext } from "../../Context/SearchUserList";
import { UserContext } from "../../Context/index";
import { Navigate, useNavigate } from "react-router-dom";

const index = () => {
  const [value, setValue] = useState("");
  const result = useRef();
  const { user } = useContext(UserContext);
  const { searchUser, setUserSearch } = useContext(SearchUserListContext);
  const navigate = useNavigate();
  const handleGetUser = (ev) => {
    ev.preventDefault();
    navigate("/userlist");
    api.getSearch(value).then((res) => {
      setUserSearch(res.data.items);
      console.log(searchUser);
    });
  };
  const handleD = (e) => {
    return result.current.classList.add("opacity");
  };
  const handleB = () => {
    return result.current.classList.remove("opacity");
  };
  return (
    <>
      <div className="nav_wrapper">
        <div className="nav__bar">
          <ul className="nav__list ">
            <li className="nav__logo">
              <span className="logo">
                <FaGithub className="display-6" />
              </span>
            </li>
            <li className="nav__input w">
              <form onSubmit={handleGetUser}>
                <input
                  className="nav-input"
                  placeholder="Search or jump to..."
                  onFocus={(e) => handleD(e)}
                  onBlur={(e) => handleB(e)}
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                  value={value}
                />
              </form>
              <div className="input-result opacity-0" ref={result}>
                <BiSearch className="search-icon" />
                <span className="input-value">{value}</span>
                <hr />
              </div>
            </li>
            <li className="nav__item">
              <p>Pull requests</p>
            </li>
            <li className="nav__item">
              <p>Issues</p>
            </li>
            <li className="nav__item">
              <p>Codespaces</p>
            </li>
            <li className="nav__item">
              <p>Marketplace</p>
            </li>
            <li className="nav__item">
              <p>Explore</p>
            </li>
          </ul>
          <ul className="nav-right-list ">
            <li className="nav-right__item">
              <span>
                <BsBell />
              </span>
            </li>
            <li className="nav-right__item">
              <span>
                {" "}
                <AiOutlinePlus />
              </span>
              <span>
                {" "}
                <AiFillCaretDown />
              </span>
            </li>
            <li className="nav-right__item">
              <img className="user-img" src={user.avatar_url} alt="user-img" />
              <span>
                {" "}
                <AiFillCaretDown />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default index;
