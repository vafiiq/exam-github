import React, { useContext } from "react";
import "./index.scss";
import User from "../../assets/bg-gendalf.jpg";
import { SearchUserListContext } from "../../Context/SearchUserList";
import { UserContext } from "../../Context";
import { useNavigate } from "react-router-dom";
import { api } from "../../API";
import { UserNameContext } from "../../Context/UserName";
const index = () => {
  const { setUserName, userName } = useContext(UserNameContext);
  const { searchUser } = useContext(SearchUserListContext);
  const navigate = useNavigate();
  const handleSetUser = (users) => {
    setUserName(users);
    navigate("/");
  };
  return (
    <div className="card p-5 mx-auto shadow mt-5 w-50">
      {searchUser.length > 0 ? (
        searchUser.map((e) => {
          return (
            <div
              className="user d-flex align-items-center gap-5 mb-3"
              key={e.login}
              onClick={() => {
                handleSetUser(e.login);
              }}
            >
              <div className="search-user-img">
                <img src={e.avatar_url} alt="" className="sui" />
              </div>
              <div className="search-user-name">
                <span className="search-name">{e.login}</span>
              </div>
            </div>
          );
        })
      ) : (
        <h1 className="text-center">NOT FOUND</h1>
      )}
    </div>
  );
};

export default index;
