import React, { useEffect } from "react";
import "./index.scss";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";
import moment from "moment";
import Loader from "../../components/Loader";
const index = ({ data, postPerPage, setPostPage, total }) => {
  const arr = [];
  for (let i = 0; i < Math.ceil(total.length / postPerPage); i++) {
    arr.push(i);
  }
  console.log(arr);

  const dot = (lang) => {
    switch (lang) {
      case "HTML":
        return {
          background: "#E34C26",
        };
        break;

      case "CSS":
        return {
          background: "#563D7C",
        };

      case "SCSS":
        return {
          background: "#C6538C",
        };

      case "JavaScript":
        return {
          background: "#F1E05A",
        };

      default:
        break;
    }
  };

  return (
    <>
      {data.length > 0 ? (
        data.map((e) => {
          return (
            <div className="" key={e.id}>
              <div className="repo-wrappers my-3">
                <div className="repo-left">
                  <ul className="repo-title mb-3 text-secondary">
                    <li className="repo-title-item d-flex align-items-center gap-3">
                      <h3>
                        <a href={e.html_url} target="_blank">
                          {e.full_name}
                        </a>
                      </h3>
                      <span className="public text-secondary">{e.visibility}</span>
                    </li>
                    <li className="repo-title-item">
                      {e.description ? e.description : ""}
                    </li>
                    <li className="repo-title-item">{e.name ? e.name : ""}</li>
                  </ul>
                  <ul className="repo-info d-flex align-items-center gap-3">
                    <li className="repo-info-item d-flex align-items-center">
                      <span className={`dot`} style={dot(e.language)}></span>
                      <p className="m-0 text-secondary">{e.language ? e.language : ""}</p>
                    </li>
                    <li className="repo-info-item text-secondary">
                      {e.watchers ? <AiOutlineStar /> : ""}
                      <span>{e.watchers ? e.watchers : ""}</span>
                    </li>
                    <li className="repo-info-item">
                      Update {moment(e.updated_at).endOf("day").fromNow()}
                    </li>
                  </ul>
                </div>
                <div className="repo-right text-secondary">
                  <ul className="repo-right-list">
                    <li className="repo-right-item d-flex flex-row align-items-center gap-2 ">
                      <AiOutlineStar />
                      <span>Star</span>
                      <AiFillCaretDown />
                    </li>
                  </ul>
                </div>
              </div>
              <hr />
            </div>
          );
        })
      ) : (
        <Loader />
      )}
      <ul className="btn-group ">
        {arr.length > 2
          ? arr.map((page) => {
            return (
              <li key={page}>
                <button
                  className="btn btn-outline-info py-0 px-2 btn"
                  onClick={() => setPostPage(page)}
                >
                  {page}
                </button>
              </li>
            );
          })
          : ""}
      </ul>
    </>
  );
};

export default index;
