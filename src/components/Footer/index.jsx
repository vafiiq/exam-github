import React from "react";
import "./style.scss";
import { AiFillGithub } from "react-icons/ai";
const index = () => {
  let date = new Date();
  return (
    <>
      <hr />
      <div className="footer-wrapper ">
        <ul className="footer-list">
          <li className="footer-item opacity-25">
            <AiFillGithub className="display-6" />
            <span className="footer-year text-light">
              {" "}
              {date.getFullYear()} GitHub ,Inc
            </span>
          </li>
          <li className="footer-item">
            <a href="#">Terms</a>
          </li>
          <li className="footer-item">
            <a href="#">Security</a>
          </li>
          <li className="footer-item">
            <a href="#">Pricay</a>
          </li>
          <li className="footer-item">
            <a href="#">Status</a>
          </li>
          <li className="footer-item">
            <a href="#">Docs</a>
          </li>
          <li className="footer-item">
            <a href="#">Contact GitHub</a>
          </li>
          <li className="footer-item">
            <a href="#">Pricing</a>
          </li>
          <li className="footer-item">
            <a href="#">API</a>
          </li>
          <li className="footer-item">
            <a href="#">Blog</a>
          </li>
          <li className="footer-item">
            <a href="#">About</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default index;
