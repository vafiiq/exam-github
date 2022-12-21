import React, { useContext, useEffect, useState } from "react";
import Card from "../../components/Card";
import { UserContext } from "../../Context";
import "./index.scss";
import { api } from "../../API";
const index = () => {
  const [repos, setRepos] = useState([]);
  const data = useContext(UserContext);
  const {
    user: { login },
  } = data;
  useEffect(() => {
    api.getRepos(login).then((res) => {
      setRepos(res.data);
    });
  }, [login]);
  return (
    <>
      <div className="over-wrapper w-75">
        <div className="header d-flex  justify-content-between my-3 ">
          <p className="text-secondary">Popular repositories</p>
          <a href="#" className="position-relative pt-1">customize your pins</a>
        </div>
        <div className="card-wrapper">
          <Card data={repos} />
        </div>
      </div>
    </>
  );
};

export default index;
