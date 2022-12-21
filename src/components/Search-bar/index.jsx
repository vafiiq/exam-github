import React from "react";
import "./index.scss";
import { BiBookBookmark } from "react-icons/bi";
import { AiFillCaretDown } from "react-icons/ai";
import Myinput from "../UI/Myinput";
const index = () => {
  return (
    <div>
      <div className="repo-search-wrapper my-3 text-secondary ">
        <ul className="repo-list">
          <li className="repo-item">
            <Myinput
              className="form-control p-1 repo-search"
              placeholder="find yout repo....."
            />
          </li>
          <li className="repo-items d-flex align-items-center gap-1">
            <span>Type</span>
            <AiFillCaretDown />
          </li>
          <li className="repo-items d-flex align-items-center gap-1">
            <span>Lanuguage</span>
            <AiFillCaretDown />
          </li>
          <li className="repo-items d-flex align-items-center gap-1">
            <span>Sort</span>
            <AiFillCaretDown />
          </li>
          <li className="repo-items d-flex align-items-center gap-1 bg-success text-white">
            <BiBookBookmark />
            <span className="new-span">New</span>
          </li>
        </ul>
        <hr className="hr" />
      </div>
    </div>
  );
};

export default index;
